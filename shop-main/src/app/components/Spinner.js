import Image from "next/image";
export default function Spinner() {
  return (
    <Image
      src="/bars-scale.svg"
      width={50}
      height={50}
    ></Image>
  );
}
