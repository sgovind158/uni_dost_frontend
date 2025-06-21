import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Toast from "./components/Toast/Toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "Uni DOST - For University Students",
  description:
    "A platform designed to connect university students, providing a space for sharing resources, collaborating on projects, and building a supportive community.",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};
// console.log()
//
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Toast />
      </body>
    </html>
  );
}
