import Image from "next/image";

export default async function Product({ params }) {
  const response = await fetch(
    "https://fakestoreapi.com/products/" + params.id
  );
  const data = await response.json();
  return (
    <div>
        <p>{data.title}</p>
        <p>{data.description}</p>
        <p>{data.price}</p>
        <p>{data.rating.count}</p>
        <p> {
                <Image
                  src={data.image}
                  width={350}
                  height={200}
                  alt="imagem de produto"
                ></Image>
              }</p>
    </div>
  )
  
}
