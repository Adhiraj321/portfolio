"use client"

import { useEffect } from "react"
import { CheckCircle, XCircle, X } from "lucide-react"

interface ToastProps {
  message: string
  type: "success" | "error"
  isVisible: boolean
  onClose: () => void
}

export function Toast({ message, type, isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  if (!isVisible) return null

  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2 duration-300">
      <div
        className={`
        flex items-center gap-3 p-4 rounded-lg shadow-lg max-w-sm
        ${
          type === "success"
            ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
            : "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
        }
      `}
      >
        {type === "success" ? (
          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
        ) : (
          <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
        )}

        <p
          className={`text-sm font-medium ${
            type === "success" ? "text-green-800 dark:text-green-200" : "text-red-800 dark:text-red-200"
          }`}
        >
          {message}
        </p>

        <button
          onClick={onClose}
          className={`ml-auto flex-shrink-0 ${
            type === "success"
              ? "text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200"
              : "text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200"
          }`}
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
