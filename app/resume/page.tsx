"use client"

export default function ResumeRedirectPage() {
  if (typeof window !== "undefined") {
    window.location.href = "/Resume.pdf"
  }
  return null
}
