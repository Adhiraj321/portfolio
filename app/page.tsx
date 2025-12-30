"use client"

import Portfolio from "../portfolio"
import { ThemeProvider } from "../components/theme-provider"

export default function Page() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  )
}
