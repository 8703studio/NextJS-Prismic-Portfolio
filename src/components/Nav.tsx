import React from 'react'
import { createClient } from "@/prismicio";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicNextLink } from "@prismicio/next";

const client = createClient();
const settings = await client.getSingle("settings");
const Nav = () => {
  return (
    <div className="flex mx-10 items-center">
          <div className="flex flex-1 mr-auto justify-start">
            <ul>
              <li>
                <>{settings.data.contact_text}</>
                <br />
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
 )
}

export default Nav