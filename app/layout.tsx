import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

// Fonts (defined outside component to avoid re-creating on every render)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata (must be top-level export)
export const metadata: Metadata = {
  title: "Delta",
  description: "Change the way you watch Youtube videos",
};

// Default export layout
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

            {children}
            </ThemeProvider>
        </body>
      </html>
    </>
  );
}
