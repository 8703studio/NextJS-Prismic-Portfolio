import React from "react";
import { createClient } from "@/prismicio";
import Link from "next/link";


export default 
async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <header>
    <div className="flex justify-between">
      <div>Logo</div>
      <div>
      <nav>
    <ul>
        <li>
        <Link href="/" aria-label="Homepage">{settings.data.name}
        </Link>
        </li>
    </ul>
</nav>
      </div>
      <div className="more-info"></div>
    </div>
  </header>
  );
}