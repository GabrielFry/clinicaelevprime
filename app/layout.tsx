import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const logoSerif = Cormorant_Garamond({
  variable: "--font-logo-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clínica ElevPrime | Medicina com excelência e acolhimento",
  description:
    "Clínica ElevPrime: consultas, check-up, exames e programas de saúde com equipe qualificada, tecnologia e atendimento humanizado.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${logoSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white" style={{ backgroundColor: '#ffffff' }} suppressHydrationWarning>
        <main className="grow">
          {children}
        </main>
      </body>
    </html>
  );
}
