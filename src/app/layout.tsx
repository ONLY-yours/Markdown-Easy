import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
require('dotenv').config()

export const metadata = {
  title: 'MarkdownEasy',
  description: '不用带脑子也能写出好的 Markdown 结构文章',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
