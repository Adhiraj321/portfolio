"use client"

import type React from "react"
import ReactMarkDown from 'react-markdown'
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, X, Send, Loader2 } from "lucide-react"
import { type Message, chatWithAI } from "@/app/actions/chat"




export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi there! 👋 I'm Kanish's assistant. How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Show the chat button after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true)
    }, 1000) // Show after 1 seconds

    return () => clearTimeout(timer)
  }, [])

  // Scroll to bottom of messages when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault()

    if (!input.trim() || isLoading) return

    // Add user message
    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Get all messages including the new user message
      const allMessages = [...messages, userMessage]

      // Get response from our AI simulation
      const response = await chatWithAI(allMessages)

      // Add assistant message
      setMessages((prev) => [...prev, { role: "assistant", content: response }])
    } catch (error) {
      console.error("Error sending message:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again later.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  // Suggested questions
  const suggestedQuestions = ["What skills do you have?", "Tell me about your projects", "How can I contact you?"]

  const handleSuggestedQuestion = (question: string) => {
    setInput(question)
  }

  return (
    <>
      {/* Chat button */}
      <AnimatePresence>
        {showButton && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button onClick={() => setIsOpen(true)} size="lg" className="rounded-full h-14 w-14 shadow-lg dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 bg-gray-900 text-white hover:bg-gray-800">
              <MessageCircle className="h-6 w-6" />
              <span className="sr-only">Open chat</span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 left-4 right-4 z-50 sm:bottom-6 sm:right-6 sm:left-auto sm:w-full sm:max-w-sm max-h-[70vh] sm:max-h-none"
          >
            <Card className="border-none shadow-xl rounded-2xl overflow-hidden h-full sm:h-auto dark:bg-[#1a1a1a] bg-gray-50">
              <CardHeader className="dark:bg-[#262626] dark:text-white bg-white text-gray-900 p-4 border-b dark:border-white/80 border-gray-200">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-medium flex items-center gap-2">
                    <Avatar className="h-8 w-8 dark:bg-white dark:text-gray-900 bg-gray-900 text-white flex items-center justify-center">
                      <MessageCircle className="h-4 w-4" />
                    </Avatar>
                    Assistant
                  </CardTitle>
                  <motion.div whileHover={{ rotate: 90 }} transition={{ duration: 0.2 }}>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="dark:text-white dark:hover:text-white/80 dark:hover:bg-white/10 text-gray-900 hover:text-gray-700 hover:bg-gray-200 rounded-full h-8 w-8"
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close</span>
                    </Button>
                  </motion.div>
                </div>
              </CardHeader>
              <ScrollArea className="flex-1 max-h-[45vh] sm:h-80">
                <CardContent className="p-4 space-y-4 dark:bg-[#1a1a1a] bg-gray-50">
                  <AnimatePresence>
                    {messages.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`break-words whitespace-pre-wrap max-w-[80%] rounded-2xl px-4 py-2 text-sm ${message.role === "user" ? "dark:bg-white dark:text-gray-900 bg-gray-900 text-white" : "dark:bg-white/10 dark:text-white bg-gray-200 text-gray-900"
                            }`}
                        >
                          <ReactMarkDown>
                            {message.content}
                          </ReactMarkDown>

                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="max-w-[80%] rounded-2xl px-4 py-2 dark:bg-white/10 bg-gray-200 flex items-center gap-2 text-sm">
                        <span className="flex space-x-1">
                          <motion.span
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.1 }}
                            className="block w-2 h-2 bg-gray-500 rounded-full"
                          />
                          <motion.span
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.2 }}
                            className="block w-2 h-2 bg-gray-500 rounded-full"
                          />
                          <motion.span
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.3 }}
                            className="block w-2 h-2 bg-gray-500 rounded-full"
                          />
                        </span>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </CardContent>
              </ScrollArea>
              <CardFooter className="p-4 border-t dark:border-white/80 border-gray-200 flex-col gap-3 dark:bg-[#1a1a1a] bg-gray-50">
                {messages.length <= 2 && (
                  <div className="w-full flex flex-wrap gap-2 mb-2">
                    {suggestedQuestions.map((question, index) => (
                      <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleSuggestedQuestion(question)}
                          className="rounded-full text-xs dark:bg-transparent dark:border-white/40 dark:text-gray-300 dark:hover:bg-white/10 bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
                        >
                          {question}
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                )}
                <form onSubmit={handleSendMessage} className="flex w-full gap-2">
                  <Input
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="rounded-xl dark:bg-[#262626] dark:border-white/10 dark:text-white bg-white border-gray-300 text-gray-900"
                    disabled={isLoading}
                  />
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button type="submit" size="icon" disabled={isLoading || !input.trim()} className="rounded-xl dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 bg-gray-900 text-white hover:bg-gray-800">
                      {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                      <span className="sr-only">Send</span>
                    </Button>
                  </motion.div>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
