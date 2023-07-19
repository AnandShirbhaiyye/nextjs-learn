"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/navigation";

export default function About () {
  const router = useRouter();
  return (
    <div> 
    <h2>About page</h2>
    {/* <Link href="/">HomePage</Link> */}
    <button onClick={()=>router.push("/")}>go to home page</button>
  </div>
  )
}
