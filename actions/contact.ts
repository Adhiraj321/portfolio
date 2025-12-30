"use server"

import { Resend } from "resend"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function submitContactForm(data: ContactFormData) {
  try {
    // Basic validation
    if (!data.name || !data.email || !data.subject || !data.message) {
      return {
        success: false,
        message: "Please fill in all required fields.",
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
      }
    }

    // Use the API key directly (since environment variables might not be accessible in v0)
    const apiKey = process.env.RESEND_API_KEY || "re_8fym7L3H_MXjmNupCssnKfJMq9FUiXAHK"

    if (!apiKey || apiKey === "your_api_key_here") {
      console.error("RESEND_API_KEY is not properly configured")
      return {
        success: false,
        message: "Email service is not configured. Please try again later.",
      }
    }

    // Initialize Resend with the API key
    const resend = new Resend(apiKey)

    console.log("Attempting to send email with Resend...")

    // Send email using Resend
    const emailResult = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["Trikhakanishk@gmail.com"],
      subject: `Portfolio Contact: ${data.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #0E0E10; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #555; margin-bottom: 5px;">From:</h3>
              <p style="margin: 0; padding: 10px; background-color: #f5f5f5; border-radius: 5px;">
                <strong>${data.name}</strong><br>
                <a href="mailto:${data.email}" style="color: #0066cc;">${data.email}</a>
              </p>
            </div>

            <div style="margin-bottom: 20px;">
              <h3 style="color: #555; margin-bottom: 5px;">Subject:</h3>
              <p style="margin: 0; padding: 10px; background-color: #f5f5f5; border-radius: 5px;">
                ${data.subject}
              </p>
            </div>

            <div style="margin-bottom: 20px;">
              <h3 style="color: #555; margin-bottom: 5px;">Message:</h3>
              <div style="padding: 15px; background-color: #f5f5f5; border-radius: 5px; line-height: 1.6;">
                ${data.message.replace(/\n/g, "<br>")}
              </div>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #888; font-size: 12px;">
              <p>This email was sent from your portfolio contact form.</p>
              <p>Sent on: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

From: ${data.name} (${data.email})
Subject: ${data.subject}

Message:
${data.message}

Sent on: ${new Date().toLocaleString()}
      `,
    })

    console.log("Email send result:", emailResult)

    if (emailResult.error) {
      console.error("Error sending notification email:", emailResult.error)
      return {
        success: false,
        message: `Failed to send message: ${emailResult.error.message}`,
      }
    }

    // Send auto-reply to the user
    try {
      const autoReplyResult = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [data.email],
        subject: "Thanks for reaching out!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
            <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #333; margin-bottom: 20px;">Thanks for reaching out!</h2>
              
              <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
                Hi ${data.name},
              </p>
              
              <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
                Thank you for contacting me through my portfolio. I've received your message about "<strong>${data.subject}</strong>" and I'll get back to you as soon as possible.
              </p>
              
              <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
                I typically respond within 24-48 hours. In the meantime, feel free to check out my projects and connect with me on social media.
              </p>
              
              <div style="margin: 30px 0; padding: 20px; background-color: #f5f5f5; border-radius: 5px;">
                <h3 style="color: #333; margin-bottom: 10px;">Your Message:</h3>
                <p style="color: #666; margin: 0; font-style: italic;">
                  "${data.message}"
                </p>
              </div>
              
              <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
                Best regards,<br>
                <strong>Kanishk Trikha</strong><br>
                Marketing & HR Professional
              </p>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                <p style="color: #888; font-size: 12px; margin: 0;">
                  This is an automated response. Please don't reply to this email.
                </p>
              </div>
            </div>
          </div>
        `,
        text: `
Hi ${data.name},

Thank you for contacting me through my portfolio. I've received your message about "${data.subject}" and I'll get back to you as soon as possible.

I typically respond within 24-48 hours. In the meantime, feel free to check out my projects and connect with me on social media.

Your Message:
"${data.message}"

Best regards,
Kanishk Trikha
Marketing & HR Professional

This is an automated response. Please don't reply to this email.
        `,
      })

      console.log("Auto-reply result:", autoReplyResult)

      if (autoReplyResult.error) {
        console.error("Error sending auto-reply email:", autoReplyResult.error)
        // Don't fail the entire operation if auto-reply fails
      }
    } catch (autoReplyError) {
      console.error("Auto-reply failed:", autoReplyError)
      // Continue with success even if auto-reply fails
    }

    console.log("Contact form submission completed successfully")

    return {
      success: true,
      message: "Thanks for reaching out! I'll get back to you soon. Check your email for a confirmation.",
    }
  } catch (error) {
    console.error("Error in contact form submission:", error)

    // Check if it's a Resend API error
    if (error instanceof Error) {
      if (error.message.includes("API key") || error.message.includes("Missing API key")) {
        return {
          success: false,
          message: "Email service configuration error. Please contact me directly at Trikhakanishk@gmail.com.",
        }
      }

      if (error.message.includes("rate limit")) {
        return {
          success: false,
          message: "Too many requests. Please wait a moment before trying again.",
        }
      }

      // Return the actual error message for debugging
      return {
        success: false,
        message: `Error: ${error.message}. Please contact me directly at Trikhakanishk@gmail.com.`,
      }
    }

    return {
      success: false,
      message: "Failed to send message. Please try again later or contact me directly at Trikhakanishk@gmail.com.",
    }
  }
}
