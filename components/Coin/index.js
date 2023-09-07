import Image from "next/image";
import styled from "styled-components";
import Link from "next/link.js";
import LikeButton from "../LikeButton";

export default function Coin({
  image,
  name,
  rank,
  marketcap,
  symbol,
  price,
  id,
  change,
  changeusd,
  onToggleFavorite,
  isFavorite,
}) {
  return (
   
      <Wrapper>
        <StyledLink href={`/coin-details/${id}`}>
          <StyledRank>
          <p>{rank}</p>
          </StyledRank>
          <StyledCoin>
          <StyledImage src={image} alt={name} height={25} width={25} />
          <p>{symbol}</p>
          </StyledCoin>
          <p>{change} %</p>
          <StyledPrices>
          <p>{price}</p>
          <p>{marketcap}</p>
          </StyledPrices>
          <p>{changeusd}</p>
        </StyledLink>
        <LikeButton isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} id={id} />
      </Wrapper>
    
  );
}


const StyledLink = styled(Link)`
display: flex;
align-items: center;
justify-content: space-between;
`;
const Wrapper = styled.div`
  margin: 8px;
  border-bottom: lightgrey solid 1px;
  position: relative;
  font-size: medium;
`;

const StyledImage = styled(Image)`
  align-self: center;
  margin-bottom: -10px;

`;
const StyledRank = styled.span`
font-size: small;
color: #656c6a;
margin-right: -24px;

`;

const StyledCoin = styled.span`
font-size: small;
align-items: center;

`;

const StyledPrices = styled.span`
text-align: right;
`;
