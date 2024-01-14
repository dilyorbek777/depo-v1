import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/shared/theme-provider'
import Navbar from './(root)/components/Navbar'
import { ConvexClientProvider } from '@/components/shared/convex-provider'
import Footer from './(root)/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Depo-uz vercel by Dilyorbek Asfandiyorov',
  description: 'Hi there👋, Welcome to DEPO Special web site for manifesting the projects, web apps by Dilyorbek Asfandiyorov explore the perfect apps, web sites and fresh designs',
  creator:"Dilyorbek Asfandiyorov",
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  )
}
