export default function Main(){
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();
  
    return(
        {data.map((products) => (
            <div key={products.id}>
              <h1>{products.title}</h1>
              <h2>{products.price}</h2>
              <p>{products.description}</p>
              <p>{products.category}</p>
              <image src={products.images} width={100} height={100} alt='imagem de produto'></image>
            </div>
          ))}
    )
}