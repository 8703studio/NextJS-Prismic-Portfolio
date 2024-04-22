import React from "react";
import { createClient } from "@/prismicio";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";


export default 
async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <header>
    <div className="flex justify-between">
      <div><PrismicNextImage field={settings.data.logo} /></div>
      <div>
      <nav>
    <ul>
        <li></li>
        <li></li>
    </ul>
</nav>
      </div>
      <div className="more-info"></div>
    </div>
  </header>
  );
}