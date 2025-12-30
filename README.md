# Portfolio Contact Form with Resend

This portfolio includes a contact form that uses Resend for email delivery.

## Setup Instructions

### 1. Install Resend
The Resend package is automatically installed when you use this code.

### 2. Get Resend API Key
1. Go to [Resend.com](https://resend.com)
2. Sign up for a free account
3. Go to API Keys section
4. Create a new API key
5. Copy the API key

### 3. Add Environment Variable
Add your Resend API key to your environment variables:

\`\`\`bash
RESEND_API_KEY=your_resend_api_key_here
\`\`\`

### 4. Verify Your Domain (Optional but Recommended)
1. In your Resend dashboard, go to Domains
2. Add your domain (e.g., yourdomain.com)
3. Follow the DNS verification steps
4. Update the `from` email addresses in the code to use your verified domain

### 5. Update Email Addresses
In `actions/contact.ts`, update:
- `to: ['xtmani2004@gmail.com']` - Change to your email address
- `from: 'Portfolio Contact <onboarding@resend.dev>'` - Use your verified domain

## Features

### ✅ What's Included:
- **Professional email templates** with HTML and text versions
- **Auto-reply functionality** - Users get a confirmation email
- **Proper error handling** with user-friendly messages
- **Email validation** and form validation
- **Responsive email design** that works on all devices
- **Security best practices** with server-side validation

### 📧 Email Features:
- **Formatted contact emails** with sender info and message
- **Auto-reply confirmation** to let users know you received their message
- **Professional styling** with your branding
- **Timestamp and metadata** for better organization

### 🔒 Security:
- Server-side validation
- Email format validation
- Required field validation
- Error handling for API failures

## Customization

### Email Templates
You can customize the email templates in `actions/contact.ts`:
- Update the HTML styling to match your brand
- Modify the auto-reply message
- Add your logo or signature

### Validation Rules
Add custom validation rules as needed:
- Message length limits
- Spam detection
- Rate limiting

## Free Tier Limits
Resend free tier includes:
- 3,000 emails per month
- 100 emails per day
- Perfect for portfolio contact forms

## Troubleshooting

### Common Issues:
1. **"Email service not configured"** - Make sure `RESEND_API_KEY` is set
2. **Emails not sending** - Check your API key is valid
3. **Emails going to spam** - Verify your domain with Resend
4. **Rate limiting** - Free tier has daily limits

### Testing:
1. Test with your own email first
2. Check both inbox and spam folders
3. Verify auto-reply is working
4. Test error handling by removing API key temporarily
