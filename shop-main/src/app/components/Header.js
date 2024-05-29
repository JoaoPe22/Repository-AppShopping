import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div>
      <header>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <Link href="/">ShopVendas Canezin</Link>
          </div>
          <ul className={styles.navlist}>
            <li className={styles.navitem}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/">Produtos</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
