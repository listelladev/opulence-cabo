import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Opulence Cabo | Luxury Private Villas & Experiences in Los Cabos",
  description:
    "Experience the pinnacle of luxury in Los Cabos. Opulence Cabo offers exclusive private villas, yachting, fine dining, private aviation, and curated luxury experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/nem2qgl.css" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
