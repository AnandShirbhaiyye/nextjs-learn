"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const  navigate  = (name)=>{
    router.push(name)
  }

  // const [item, setItem] = useState("KajalKanchan")

  // const apple = (item)=>{
  //   alert(item)
  // }

  // const state=()=>{
  //   setItem("AnandUjwal")
  // }

  //   const InnerComp=()=>{
  //     return(
  //       <h1>innerCompoent</h1>
  //     )
  //   }

  return (
    <main>
      {/* className={styles.main} */}
      <h1>Basic Routing | Make new Page</h1>
      <Link href="login">Go to login page</Link>
      <br />
      <br />
      <Link href="about">Go to about page</Link>
      <br />
      <br />

      {/* <button onClick={()=>router.push("/login")}>Login Page</button>
      <button onClick={()=>router.push("/about")}>About Page</button> */}
      <button onClick={()=>navigate('/login')}>Login Page</button>
      <button onClick={()=>navigate('/about')}>About Page</button>

      {/* <button>Login Page</button> */}
      {/* <h1>Hello Anand...</h1>
      <User name="Anand" age={23}/>
      <User name="Kajal" age={26}/>
      <User name="Kanchan" age={27}/>
      <button onClick={()=>alert("Hello Next Js")}>Click me..</button>
      <button onClick={()=>apple("hey...nextjs..how are you")}>Click me2</button> */}
      {/* //   <h1>Hello {item}</h1>
    //   <button onClick={()=>state()}>State</button>
    //   <InnerComp/> */}
    </main>
  );
}

// const User = (props) => {
//   return (
//     <div>
//       <h2>My Name is {props.name} and age {props.age}</h2>
//     </div>
//   )
// };
