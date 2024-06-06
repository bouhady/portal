import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Open_Sans({ subsets: ["hebrew"] });

export const metadata: Metadata = {
  title: "הר לעמק 2024",
  description: "קישורים למסלולים ותחנות ההחפה",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
