import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata: Metadata = {
  title: "Portfolio - Mani",
  description: "I am a Computer Science student at VIT-AP University with a strong foundation in frontend development.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${ovo.variable} font-Outfit bg-white text-gray-900 antialiased leading-8 overflow-x-hidden dark:bg-[#11001F] dark:text-white transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
