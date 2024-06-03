import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.objetoFooter}>
        <ul className={styles.redeSocial}>
          <li className={styles.itemRedeSocial}>
            <Link href="/">Facebook</Link>
          </li>
          <li className={styles.itemRedeSocial}>
            <Link href="/">Instagram</Link>
          </li>
          <li className={styles.itemRedeSocial}>
            <Link href="/">TikTok</Link>
          </li>
          <li className={styles.itemRedeSocial}>
            <Link href="/">WhatsApp</Link>
          </li>
        </ul>
        <p className={styles.dataCriacao}>Desde 2007</p>
        <div className={styles.logo}>
          <Image
            src="https://seeklogo.com/images/C/carrinho-de-supermercado-logo-84CEB674DF-seeklogo.com.png"
            width={70}
            height={70}
          />
        </div>
      </div>
    </footer>
  );
}
