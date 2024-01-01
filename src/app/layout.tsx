import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import NavbarPage from '@/components/navbar/Navbar'
import Footer from '@/components/footer/footer'
import NavbarPage from '@/components/navbar/Navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Laundry App',
  description: 'Generated by Syadur Rahaman',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarPage/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
