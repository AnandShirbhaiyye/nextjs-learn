'use client'
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {

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
    <main className={styles.main}>
      <h1>Basic Routing | Make new Page</h1>
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
