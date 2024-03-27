import React from "react";
import { createClient } from "@/prismicio";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Logo from "./Logo";

export default 
async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <header className="">
    <Logo /> 
    <nav>
        <ul>
            <li>
            <Link href="/" aria-label="Homepage">
            </Link>
            </li>
        </ul>
    </nav>
  </header>
  );
}
