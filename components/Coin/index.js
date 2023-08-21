import Image from "next/image";
import styled from "styled-components";
import Link from "next/link.js";
import LikeButton from "../LikeButton";

export default function Coin({
  image,
  name,
  symbol,
  price,
  id,
  toggleLiked,
  liked,
}) {
  return (
    <StyledArticle>
      <Wrapper>
        <StyledLink href={`/coin-details/${id}`}>
          <StyledImage src={image} alt={name} height={25} width={25} />
          <p>{symbol}</p>
          <p>{price} $</p>
        </StyledLink>
        <LikeButton onClick={toggleLiked} liked={liked} />
      </Wrapper>
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  text-align: center;
`;
const StyledLink = styled(Link)`
display: flex;
justify-content: space-evenly;
`;
const Wrapper = styled.div`
  margin: 8px;
  border: black solid 2px;
  border-radius: 15px;
  text-transform: uppercase;
  position: relative;
`;

const StyledImage = styled(Image)`
  align-self: center;
`;
