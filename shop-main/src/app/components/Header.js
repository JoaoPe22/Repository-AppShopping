import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <div>
      <header>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <Image
              src={
                "https://seeklogo.com/images/C/carrinho-de-supermercado-logo-84CEB674DF-seeklogo.com.png"
              }
              width={70}
              height={70}
            ></Image>
            <Link href="/" className={styles.texto}>
              ShopVendas Canezin
            </Link>
          </div>
          <ul className={styles.navlist}>
            <li className={styles.navitem}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/">Produtos</Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/">
                <Image
                  src={
                    "https://cdn.icon-icons.com/icons2/3231/PNG/512/cart_store_market_icon_197007.png"
                  }
                  width={38}
                  height={38}
                ></Image>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/">
                <Image
                  src={
                    "https://www.nicepng.com/png/full/251-2519428_0-add-icon-white-png.png"
                  }
                  width={25}
                  height={25}
                ></Image>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
