import React from "react";
import { createClient } from "@/prismicio";

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <div>Footer</div>
  )
}
