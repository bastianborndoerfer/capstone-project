import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import LikeButton from "../LikeButton";

export default function CoinHeader({
  image,
  symbol,
  name,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <StyledHeader>
      <StyledBackButton>
        <Link href={"/"}>
          <Image src={"/back.svg"} width={25} height={25} alt="backtohome" />
        </Link>
      </StyledBackButton>
      <StyledImage src={image} alt={name} height={25} width={25} />
      <p>{name}</p>
      <p>({symbol})</p>
      <StyledLikeButton>
        <LikeButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
      </StyledLikeButton>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  font-weight: bolder;
  font-size: larger;
  position: relative;
  height: 40px;
  margin: 12px;
`;

const StyledImage = styled(Image)`
  align-self: center;
  margin: 16px;
  color: #f4f4f4;
`;

const StyledBackButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

const StyledLikeButton = styled.div`
position: absolute;
top: -8px;
right: -16px;
`;
