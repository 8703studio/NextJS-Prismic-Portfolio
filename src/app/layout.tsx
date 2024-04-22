import "./globals.css";


import type { Metadata } from "next";
import Link from "next/link";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { asText } from "@prismicio/client";
import { Inter } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";


import { createClient, repositoryName } from "@/prismicio";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(){
  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    title: asText(settings.data.site_title),
  };
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#ff3535] text-slate-100">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
