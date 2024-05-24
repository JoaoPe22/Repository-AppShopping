import Link from 'next/link';
import styles from './header.module.css'

export default function Header() {
  return (
    <div>
      <header className={styles.cabecalho}>
        

        <div>
            <nav>
            <ul className="flex"> 
                <Link href="/">
                <li className={styles.text}>Home</li>
                </Link>

            </ul>
            </nav>
        </div>
        
      </header>

    </div>
  );
}
 