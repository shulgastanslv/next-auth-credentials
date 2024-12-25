import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next-Auth-Credentials",
  description: "Next-Auth-Credentials next example app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="h-screen flex flex-col">
            {children}
            <footer className="w-full flex items-center justify-center gap-5 h-14 mb-10">
              <Link
                className="flex items-center gap-1 text-current"
                href=""
                title="nextui.org"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">Next-UI</p>
              </Link>
              <ThemeToggle />
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
