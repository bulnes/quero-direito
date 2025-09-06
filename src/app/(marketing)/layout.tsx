import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quero Direito - IA para Automação Jurídica | Atendimento 24h",
  description:
    "Automatize seu atendimento jurídico com IA. Triagem inteligente, agendamento automático e fechamento de contratos. Aumente sua conversão em 95% com tecnologia de ponta.",
  keywords: [
    "automação",
    "jurídica",
    "IA para advogados",
    "atendimento automático",
    "escritório digital",
    "tecnologia jurídica",
    "chatbot jurídico",
    "CRM jurídico",
  ],
  authors: [{ name: "Quero Direito", url: "https://querodireito.com.br" }],
  publisher: "Quero Direito",
  robots: "index, follow",
  openGraph: {
    title: "Quero Direito - IA para Automação Jurídica | Atendimento 24h",
    description:
      "Automatize seu atendimento jurídico com IA. Triagem inteligente, agendamento automático e fechamento de contratos. Aumente sua conversão em 95% com tecnologia de ponta.",
    url: "https://querodireito.com.br",
    siteName: "Quero Direito",
    images: [
      {
        url: "https://querodireito.com.br/og-image.png",
        width: 1200,
        height: 630,
        alt: "Quero Direito - IA para Automação Jurídica",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
