import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello Anand...</h1>
      <User/>
      <User/>
      <User/>
      <User/>
      <User/>
    </main>
  );
}

const User = () => {
  return (
    <div>
      <h2>My Name is Ujwal...</h2>
    </div>
  )
};
