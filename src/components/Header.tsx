import React from "react";
import Link from "next/link";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/" aria-label="Home Page">
              {settings.data.name}
            </Link>
          </li>
          {settings.data.navigation.map(({ link, label}, index) => (
            <li key={index}>
              <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>
          ))}
          <li></li>
        </ul>
      </nav>
    </header>
  );
}
