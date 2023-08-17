import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function CoinHeader({ image, symbol, name }) {
  return (
    <StyledHeader>
      <Link href={"/"}>←</Link>
      <Image src={image} alt={name} height={80} width={80} />
      <p>{name}</p>
      <p>({symbol})</p>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-evenly;
  border-bottom: solid;
  text-transform: uppercase;
  font-weight: bolder;
  font-size: larger;
`;
