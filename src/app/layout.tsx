import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "@/providers/query-provider";

export const metadata: Metadata = {
  title: "Your AI-Powered Voice Agent for Learning & Earning · ParlezHub",
  description: "ParlezHub is an AI-powered voice tutor and freelance marketplace. Learn languages via natural conversations and earn by teaching or consulting—all in one platform.",
  keywords: "AI tutor, voice AI, language learning, freelance teachers, consultants, marketplace, learn and earn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-sans antialiased"
      >
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
