import "@/app/globals.css";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/constants";
import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
};

export default function NotFound() {
  return (
    <div
      className={`${inter.className} antialiased min-h-screen bg-background`}
    >
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-xl font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Página não encontrada
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Desculpe, não conseguimos encontrar a página que você está
            procurando.
          </p>
        </div>
      </main>
    </div>
  );
}
