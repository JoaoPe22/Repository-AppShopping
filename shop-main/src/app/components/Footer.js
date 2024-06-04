import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.objetoFooter}>
        <ul className={styles.redeSocial}>
          <li className={styles.itemRedeSocial}>
            <Link href="/">
              <Image
                src={
                  "https://static.vecteezy.com/system/resources/previews/016/716/447/original/facebook-icon-free-png.png"
                }
                width={15}
                height={15}
              ></Image>
              Facebook
            </Link>
          </li>
          <li className={styles.itemRedeSocial}>
            <Link href="/">
              <Image
                src={
                  "https://www.vicosa.mg.leg.br/imagens/instagram-icone-png.png/image"
                }
                width={15}
                height={15}
              ></Image>
              Instagram
            </Link>
          </li>
          <li className={styles.itemRedeSocial}>
            <Link href="/">
              <Image
                src={
                  "https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Tiktok-512.png"
                }
                width={15}
                height={15}
              ></Image>
              TikTok
            </Link>
          </li>
          <li className={styles.itemRedeSocial}>
            <Link href="/">
              <Image
                src={
                  "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-icon-png-image_6315990.png"
                }
                width={15}
                height={15}
              ></Image>
              WhatsApp
            </Link>
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
