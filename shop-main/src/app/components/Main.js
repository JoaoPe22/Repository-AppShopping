import styles from "./main.module.css"

export default async function Main(){
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();
  
    return(
      <main className={styles.main}>
        {data.map((products) => (
            <div key={products.id} className={styles.card}>
              <h1>{products.title}</h1>
              <h2>R${products.price}</h2>
              <p>{products.description}</p>
              <p>{products.category.name}</p>
              {/* <img src={products.images} width={100} height={100} alt='imagem de produto'></img> */}
            </div>
          ))}
        </main>
    )
}  