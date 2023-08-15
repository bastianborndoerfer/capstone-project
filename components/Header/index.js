import Image from "next/image";

export default function Header() {
  return (
    <header>
      <Image
        src="/placeholder.png"
        height={100}
        width={100}
        alt="A Logo Placeholder"
      />
      <h1>KryptoScout</h1>
    </header>
  );
}
