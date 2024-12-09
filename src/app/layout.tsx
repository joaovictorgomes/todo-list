import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Usando o Inter diretamente do `next/font/google`
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Todo List",
  description: "Todo List",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
