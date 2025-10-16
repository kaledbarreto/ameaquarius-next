import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Ameaquarius",
  description: "Site oficial da Ameaquarius",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const isNotFound = headersList.get("x-is-not-found") === "true";

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logoIcon.png" />
      </head>
      <body className="antialiased">
        {!isNotFound && <Navigation />}
        {children}
      </body>
    </html>
  );
}
