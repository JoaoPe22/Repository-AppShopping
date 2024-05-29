import styles from "./main.module.css";
import Image from "next/image";

export default async function Main() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  return (
    <main className={styles.container}>
      {data.map((products) => (
        <div key={products.id} className={styles.card}>
          <div className={styles.cabecalho}>
            {
              <Image
                className={styles.image}
                src={products.image}
                width={350}
                height={200}
                alt="imagem de produto"
              ></Image>
            }
          </div>
          <div className={styles.corpoCard}>
            <h3 className={styles.titulo}>{products.title}</h3>
            <p className={styles.descricao}>{products.description}</p>
            <h2 className={styles.preco}>R${products.price}</h2>
            <p className={styles.avaliacao}>Avaliações:{products.rating.count}</p>
          </div>
        </div>
      ))}
    </main>
  );
}
