import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nigeria Problem to Proof",
  description: "Real problems. Real builders. Real proof.",
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
