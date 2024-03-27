import React from "react";
import { createClient } from "@/prismicio";
import Logo from "./Logo";


export default async function Header() {
    const client = createClient();
    const settings = await client.getSingle("settings");

  return (
    <header className="">
        <Logo />
    </header>
  );
}

