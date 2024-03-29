import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";

const font = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alexis Osuna",
  description: "Web development is my passion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
