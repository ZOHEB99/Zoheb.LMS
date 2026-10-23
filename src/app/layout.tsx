import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Zoheb LMS | Technical Learning & Interview Readiness',
  description: 'Guided, role-specific learning roadmaps for technical candidates.',
  keywords: ['technical interview preparation', 'forward deployed engineer', 'AI engineer', 'LMS'],
  openGraph: {
    title: 'Zoheb LMS | Technical Learning & Interview Readiness',
    description: 'Follow every learning module from first screen to final readiness.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer className="site-branding">Built by Zoheb</footer>
      </body>
    </html>
  )
}
