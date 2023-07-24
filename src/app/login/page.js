"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import React from 'react';

export default function Login() {
  const router = useRouter();

  const navigate = (page)=>{
    router.push("/login/" +page)
  }
  return (
    <div> 
      <h2>Login page</h2>
      <Link href="/">HomePage</Link><br/><br/>

      {/* <button onClick={()=>router.push("/login/loginstudent")}>Go to Student Login Page</button> */}
      <button onClick={()=>navigate("loginstudent")}>Go to Student Login Page</button>
      <br/><br/>
      <button onClick={()=>navigate("loginteacher")}>Go to Teacher Login Page</button>
    </div>
    
  )
}
