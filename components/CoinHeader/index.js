import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import LikeButton from "../LikeButton";

export default function CoinHeader({ image, symbol, name, isFavorite, onToggleFavorite }) {
  return (
    <StyledHeader>
      <Link href={"/"}>←</Link>
      <Image src={image} alt={name} height={80} width={80} />
      <p>{name}</p>
      <p>({symbol})</p>
      <LikeButton isFavorite={isFavorite} onToggleFavorite={onToggleFavorite}/>
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
  position: relative;
`;
