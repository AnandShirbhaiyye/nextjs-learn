import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello Anand...</h1>
      <User name="Ujwal" age={23}/>
      <User name="Anand" age={23}/>
      <User name="Ankit" age={24}/>
      <User name="Kajal" age={26}/>
      <User name="Kanchan" age={27}/>
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
