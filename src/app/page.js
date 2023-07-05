'use client'
import styles from "./page.module.css";

export default function Home() {

  const apple = (item)=>{
    alert(item)
  }
  return (
    <main className={styles.main}>
      <h1>Hello Anand...</h1>
      <User name="Anand" age={23}/>
      <User name="Kajal" age={26}/>
      <User name="Kanchan" age={27}/>
      <button onClick={()=>alert("Hello Next Js")}>Click me..</button>
      <button onClick={()=>apple("hey...nextjs..how are you")}>Click me2</button>
    </main>
  );
}

const User = (props) => {
  return (
    <div>
      <h2>My Name is {props.name} and age {props.age}</h2>
    </div>
  )
};
