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

    <br/>

    <Link href="./about/aboutcollege">Go to About College Page</Link><br/><br/>
    <Link href="./about/aboutstudent">Go to About Student Page</Link>

  </div>
  )
}
