"use client";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import styles from "./main.module.css";
import Image from "next/image";
import ErrorGetData from "./ErrorGetData";
import Link from "next/link";
import product from "../product/[id]/page";

export default function Main() {
  const [listProduct, setListProduct] = useState([]);
  const [listComplete, setListComplete] = useState([]);
  const [search, setSearch] = useState("");
  const [errorFetch, setErrorFetch] = useState(false)
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        setListProduct(data);
        setListComplete(data);
      } catch {
        setErrorFetch(true);
      }
    };
    getProduct();
  }, []);


  if(errorFetch == true){
    return <ErrorGetData/>
  }
  
  if (listComplete[0] == null) {
    return (
      <main>
        <Spinner />
      </main>
    );
  }

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


  const searchText = (text) => {
    setSearch(text);

    if (text.trim() == "") {
      setListProduct(listComplete);
      return;
    }

    const newList = listProduct.filter((product) =>
      product.title.toUpperCase().trim().includes(search.toUpperCase().trim())
    );
    setListProduct(newList);
  };



  return (
    <>
      <div>
        {/* input de pesquisa de produtos */}
        <input
          type="text"
          value={search}
          placeholder="Pesquise Produto"
          onChange={(event) => searchText(event.target.value)}
        />

        {/* botões de filtrazem */}
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
              <button>
              <Link href={`product/${products.id}`}>Rota Dinamica</Link>
              </button>
              
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
