import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Victor Bueno | Full Stack Developer",
  description:
    "Full Stack Developer building modern web applications, business systems, and scalable digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}