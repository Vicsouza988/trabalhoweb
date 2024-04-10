import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <img src="/campus-faculdade.jpg" alt="campus faculdade" />
      </header>
      <div className={styles.cardsContainer}>
        <Link href="/tabaco" className={styles.clickableCard}>
          <h4>Tabaco</h4>
          <img src="/tabaco-image.jpg" alt="tabaco image" />
        </Link>
        <Link href="/alcool" className={styles.clickableCard}>
          <h4>Alcool</h4>
          <img src="/alcool-image.jpg" alt="alcool image" />
        </Link>
        <Link href="/maconha" className={styles.clickableCard}>
          <h4>Maconha</h4>
          <img src="/maconha-image.jpeg" alt="maconha image" />
        </Link>
        <Link href="/sinteticos" className={styles.clickableCard}>
          <h4>Sinteticos</h4>
          <img src="/sinteticos-image.jpg" alt="sinteticos image" />
        </Link>
      </div>

    </main>
  );
}
