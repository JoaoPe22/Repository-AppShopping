"use client";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import styles from "./main.module.css";
import Image from "next/image";

export default function Main() {
  const [listProduct, setListProduct] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      setListProduct(data);
    };
    getProduct();
  }, []);

  // Ordem alfabética crescente
  const orderAZ = () => {
    const newList = [...listProduct].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setListProduct(newList);
  };

  // Ordem alfabética decrecente
  const orderZA = () => {
    const newList = [...listProduct].sort((a, b) =>
      b.title.localeCompare(a.title)
    );
    setListProduct(newList);
  };

  // Ordem de preco crescente
  const minPreco = () => {
    const newList = [...listProduct].sort((a, b) => a.price - b.price);

    setListProduct(newList);
  };

  // Ordem de preco decrecente
  const maxPrice = () => {
    let newList = [...listProduct].sort((a, b) => a.price - b.price);
    newList = newList.reverse();
    setListProduct(newList);
  };

  if (listProduct[0] == null) {
    return <Spinner />;
  }

  return (
    <>
      <div>
        <button onClick={orderAZ}>a-Z</button>
        <button onClick={orderZA}>z-A</button>
        <button onClick={minPreco}>Ordenar Preço Crescente</button>
        <button onClick={maxPrice}>Ordenar Preço Decrescente</button>
      </div>

      <main className={styles.container}>
        {listProduct.map((products) => (
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
              <p className={styles.avaliacao}>
                Avaliações:{products.rating.count}
              </p>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
