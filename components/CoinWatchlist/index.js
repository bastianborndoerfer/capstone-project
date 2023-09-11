import Image from "next/image";
import styled from "styled-components";
import Link from "next/link.js";
import LikeButton from "../LikeButton";

export default function CoinWatchlist({
  image,
  name,
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
        <StyledCoin>
          <Image src={image} alt={name} height={25} width={25} />
          <p>{symbol}</p>
        </StyledCoin>
        <p>{price}</p>
        <StyledPercent $isNegative={change < 0}>
          <p>{change} %</p>
        <p>{changeusd}</p>
        </StyledPercent>
      </StyledLink>
      <LikeButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
        id={id}
      />
    </Wrapper>
  );
}

const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #26272b;
  box-shadow: 0px 0px 12px #18191b;
  border-radius: 8px;
  margin: 2rem 1rem;
  padding: 0.7rem .5rem;
  font-size: 0.75rem;
`;
const Wrapper = styled.div`
  position: relative;
`;

const StyledCoin = styled.span`
  display: flex;
  flex-direction: column;
  font-size: small;
  align-items: center;
`;

const StyledPrices = styled.span`
  text-align: right;
`;

const StyledPercent = styled.span`
  background-color: ${(props) => (props.isNegative ? "red" : "green")};
  padding: 4px;
  margin-right: 16px;
  font-size: 0.75rem;
  border-radius: 12px;
  `;
