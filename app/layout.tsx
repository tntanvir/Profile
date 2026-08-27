import type { Metadata } from "next";
import { Nunito, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { NextIntlClientProvider } from 'next-intl';
import enMessages from '@/messages/en.json';

const nunito = Nunito({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MD. Tanvir Rahaman Fuad | tntanvir - Full Stack Backend Developer",
  description: "Portfolio of MD. Tanvir Rahaman Fuad (tntanvir). Full Stack Backend Developer specializing in Python, Django, React, and Next.js.",
  keywords: ["tntanvir", "MD. Tanvir Rahaman Fuad", "Full Stack Developer", "Backend Developer", "Django", "React", "Next.js", "Portfolio"],
  icons: {
    icon: "/fav.png",
    shortcut: "/fav.png",
    apple: "/fav.png"
  },
  openGraph: {
    title: "MD. Tanvir Rahaman Fuad | tntanvir",
    description: "Portfolio of MD. Tanvir Rahaman Fuad (tntanvir). Full Stack Backend Developer.",
    url: "https://tntanvir.com",
    siteName: "tntanvir Portfolio",
    images: [
      {
        url: "/fav.png",
        width: 800,
        height: 600,
      }
    ],
    locale: "en-US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${nunito.variable} ${geistMono.variable} antialiased font-mono`}
      >
        <NextIntlClientProvider messages={enMessages} locale="en">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative w-full flex items-center justify-center">
              {/* <Navbar className="top-2" /> */}
            </div>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
