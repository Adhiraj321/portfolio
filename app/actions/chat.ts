"use server"

import { resumeData } from "@/app/data/resumeData";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export interface Message {
  role: "user" | "assistant"
  content: string
}

export async function chatWithAI(messages: Message[]): Promise<string> {
  // Get the latest user message
  // const latestMessage = messages[messages.length - 1]
  // const userMessage = latestMessage.content.toLowerCase()

  const intro = `
  You are portfolio assistant for ${resumeData.name}.
  He is actively looking for opportunities in Marketing, Commerce, and Strategic Communication.

 

  Projects:
  ${resumeData.projects.map((p) => `- ${p.name}: ${p.description[0]}`).join("\n")}

  Achievements:
  ${resumeData.achievements.map((a) => `- ${a}`).join("\n")}

  Education:
  ${resumeData.education.map((e) => `${e.qualification} from ${e.institute} (${e.year})`).join("\n")}

  Location: ${resumeData.location}
  Contact:
  - Email: ${resumeData.contact.email}


  Respond in a friendly, helpful tone. Keep your answers concise (2-4 sentences) unless the user asks for more details.
  Only highlight the most relevant information also bold the necessary details. Always try to relate the answers to Kanishk's portfolio or experience when possible. If asked, introduce yourself as KT, his portfolio assistant.
  `;

  const chatSession = model.startChat({
    history: [
      { role: "user", parts: [{ text: intro }] },
      ...messages.map((msg) => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }]
      }))
    ]
  })

  const result = await chatSession.sendMessage(messages[messages.length - 1].content)
  return result.response.text();
}