import React from "react";
import { createClient } from "@/prismicio";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicNextLink } from "@prismicio/next";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <header>
        <div className="flex mx-10 items-center">
          <div className="flex flex-1 mr-auto justify-start">
            <ul>
              <li>
                you can contact me @
                <PrismicNextLink field={settings.data.mailto}>
                  hello@87-03.org
                </PrismicNextLink>
              </li>
              <li>english version</li>
            </ul>
          </div>
          <div className="mx-1">
            <Link href="/" aria-label="home">
              <PrismicNextImage field={settings.data.logo} />
            </Link>
          </div>
          <div className="flex flex-1 flex-row ml-auto justify-end md:ml-auto md:mr-auto">
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-8">
                {settings.data.navigation.map(({ link, label }, index) => (
                  <li key={index}>
                    <PrismicNextLink field={link}>{label}</PrismicNextLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

        </div>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </header>
  );
}
