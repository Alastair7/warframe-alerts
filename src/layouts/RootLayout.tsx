import { type ReactNode } from "react"

interface HomeLayoutProps {
  children: ReactNode
}

export function RootLayout({ children }: HomeLayoutProps) {
  return <>
    {children}
  </>
}
