// app/layout.tsx
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Next.js Gallery App',
    template: '%s | Next.js Gallery App',
  },
  description: 'A modern gallery app built with Next.js, Tailwind CSS, and Framer Motion.',
  keywords: ['Next.js', 'Gallery', 'Tailwind CSS', 'Framer Motion', 'Infinite Scroll'],
  authors: [{ name: 'Ben Mungatech', url: 'https://mungatech.vercel.app/' }],
  openGraph: {
    title: 'Next.js Gallery App',
    description: 'A modern gallery app built with Next.js, Tailwind CSS, and Framer Motion.',
    url: 'https://mungatech.vercel.app/',
    siteName: 'Next.js Gallery App',
    images: [
      {
        url: 'https://mungatech.vercel.app/og-image.png', // Replace with your Open Graph image
        width: 1200,
        height: 630,
        alt: 'Next.js Gallery App',
      },
    ],
    locale: 'en_US', 
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Gallery App',
    description: 'A modern gallery app built with Next.js, Tailwind CSS, and Framer Motion.',
    images: ['https://mungatech.vercel.app/og-image.png'], // Replace with your Twitter image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico', // Replace with your favicon
    shortcut: '/favicon-16x16.png', // Replace with your shortcut icon
    apple: '/apple-touch-icon.png', // Replace with your Apple touch icon
  },
  manifest: 'https://mungatech.vercel.app/site.webmanifest', // Replace with your manifest file
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold text-gray-900">Next.js Gallery App</h1>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="bg-white mt-8 py-6">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} Next.js Gallery App. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}