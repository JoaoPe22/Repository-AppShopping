import Footer from "./components/Footer";
import Header from "./components/Header";
import styles from "./components/header.module.css";

export const metadata = {
  title: "Meu Shop.com",
  description: "E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.pagina}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
