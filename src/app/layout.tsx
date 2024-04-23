import "./globals.css";

import type { Metadata } from "next";
import { asText } from "@prismicio/client";
import { Inter } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";


import { createClient, repositoryName } from "@/prismicio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <html lang="fr" className="bg-[#ff3535] text-slate-100">
      <body className={inter.className}>
        <Header />
        <hr className="h-px bg-gray-200 border-0"></hr>
        <main>{children}</main>
        <hr className="h-px bg-gray-200 border-0"></hr>
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
