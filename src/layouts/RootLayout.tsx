import { type ReactNode } from "react"
import "./RootLayout.css"

interface RootLayoutProps {
  children: ReactNode
}

export function RootLayout({ children }: RootLayoutProps) {
  return <>
    <header>
      <h1 className="header__title">Warframe</h1>
      <h2 className="header_subtitle">Alerts</h2>
    </header>
    {children}
  </>
}
