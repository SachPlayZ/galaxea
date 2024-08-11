import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from '@/lib/utils'
import { Navbar } from "@/components/component/navbar";

const fontHeading = Poppins({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: '400',
})

const fontBody = Poppins({
  subsets: ['latin'],
  variable: '--font-body',
  weight: '400'
})

export const metadata: Metadata = {
  title: "Galaxea",
  description: "NFTs for the people",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en">
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  )
}