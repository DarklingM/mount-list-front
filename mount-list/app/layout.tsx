import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mount List FFXIV",
  description: "FFXIV Mount List - CRUD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        {/* NAVBAR */}
        <nav style = {{
          padding: "10px",
          borderBottom: "1px solid gray",
          display: "flex",
          gap: "10px"
        }}>
          <Link href = "/">Home</Link>
          <Link href = "/mounts">Mount List</Link>
        </nav>

        {/* CONTEUDO */}
        <main style = {{padding: "20px"}}>{children}</main>
      
        </body>      
    </html>
  );
}
