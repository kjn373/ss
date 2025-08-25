import { inter, poppins, workSans } from '@/common/utils/font'
import './globals.css'
import { Toaster } from '@/common/components/ui/toaster'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${poppins.variable} ${inter.variable}`}
    >
      <head>
        <title>SS College</title>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className="overflow-x-hidden lg:overflow-y-hidden main-layout-container">
        <Toaster />
        {children}
      </body>
    </html>
  )
}
