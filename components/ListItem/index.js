import Image from "next/image";

export default function ListItem({ image, name, symbol, price }) {
  return (
    <container>
      <Image src={image} alt={name} height={25} width={25} />
      <p>{symbol}</p>
      <p>{price} $</p>
    </container>
  );
}
