import React from "react";
import { createClient } from "@/prismicio";
import Link from "next/link";

import Logo from "./Logo";


export default async function Header() {


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

