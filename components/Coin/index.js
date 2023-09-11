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
          <Image src={image} alt={name} height={25} width={25} />
          <StyledParagraph>{symbol}</StyledParagraph>
        </StyledCoin>
        <StyledPercent $isNegative={change < 0}>
          <p>{change} %</p>
        </StyledPercent>
        <p>{price}</p>
        <p>{marketcap}</p>
        <p>{changeusd}</p>
      </StyledLink>
      <LikeButton
        $isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
        id={id}
      />
    </Wrapper>
  );
}

const StyledLink = styled(Link)`
  display: grid;
  grid-template-columns: minmax(20px, auto) 2fr 60px 2fr 1fr 1fr minmax(
      10px,
      auto
    );

  align-items: center;
  justify-items: center;
  background-color: #26272b;
  box-shadow: 0px 0px 12px #18191b;
  border-radius: 8px;
  margin: 2rem 1rem;
  padding: 0.7rem 0.5rem;
  font-size: 0.75rem;
`;
const Wrapper = styled.div`
  position: relative;
`;

const StyledRank = styled.span`
  font-size: small;
  color: #656c6a;
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
  font-size: 0.55rem;
  border-radius: 12px;
  text-align: center;
  width: 60px;
`;
const StyledParagraph = styled.p`
  max-width: 80px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;