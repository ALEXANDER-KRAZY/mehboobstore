import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";

import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import CardCreateModal from "./components/modals/CardCreateModal";
import RegisterModal from "./components/modals/RegisterModal";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mehbs Store",
  description: "Online store for Mehbs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <RegisterModal />
        <Navbar />
        <CardCreateModal />
        </ClientOnly>
        {children}
        </body>
    </html>
  );
}
