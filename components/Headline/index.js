import Image from "next/image";

export default function Headline() {
  return (
    <div>
      <Image
        src="/placeholder.png"
        height={100}
        width={100}
        alt="A Logo Placeholder"
      />
      <h1>KryptoScout</h1>
    </div>
  );
}
