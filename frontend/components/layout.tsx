import Header from "./header"
import Footer from "./footer"
import type { ReactNode } from "react"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-800">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  )
}
