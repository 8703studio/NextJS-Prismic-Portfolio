import React from "react";
import { createClient } from "@/prismicio";
import Nav from "./Nav";

export default 
async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <header>
    <div className="flex justify-between">
      <div>Logo</div>
      <div><Nav></Nav></div>
      <div className="more-info"> Hello</div>
    </div>
  </header>
  );
}
