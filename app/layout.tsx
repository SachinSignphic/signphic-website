import './css/style.css'

import { Inter, Architects_Daughter } from 'next/font/google'
import localFont from 'next/font/local' 

import Header from '@/components/ui/header'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

const mona_sans = localFont({
  src: [
    {
      path: '../public/fonts/MonaSansExpanded-Bold.woff2',
      weight: '600'
    },
  ],
  variable: '--font-mona-sans'
})

export const metadata = {
  title: 'Signphic Online Solutions',
  description: 'Looking for _________', //bro fill this da
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${architects_daughter.variable} ${mona_sans.variable} font-inter antialiased bg-gray-100 text-gray-700 bg-gradient-to-r from-black to-[#727272] tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
 