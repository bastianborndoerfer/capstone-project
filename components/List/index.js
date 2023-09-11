import Coin from "../Coin";
import styled from "styled-components";
import currencyFormat from "@/src/utils";

export default function List({ coinsData, onToggleFavorite }) {
  
  function formatedMarketCap(num) {
    if (num > 1_000_000_000_000) {
      return `${Math.floor(num / 1_000_000_000_000)} T`;
    }
    if (num > 1_000_000_000) {
      return `${Math.floor(num / 1_000_000_000)} B`;
    }
    if (num > 1_000_000) {
      return `${Math.floor(num / 1_000_000)} M`;
    }
    if (num > 1_000) {
      return `${Math.floor(num / 1_000)} K`;
    }
    return num;
  }


  return (
    <StyledList>
      <div>
        <StyledHeading>
          <p>#</p>
          <p>Coin</p>
          <p>24h</p>
          <p>Price</p>
          <p className="hide-mobile">Mkt Cap</p>
          <p>WL</p>
        </StyledHeading>
        {coinsData?.map((coin) => (
          <li key={coin.id}>
            <Coin
              image={coin.image}
              symbol={coin.symbol.toUpperCase()}
              price={currencyFormat(coin.current_price)}
              id={coin.id}
              name={coin.name}
              change={coin.price_change_percentage_24h.toFixed(2)}
              marketcap={formatedMarketCap(coin.market_cap)}
              rank={coin.market_cap_rank}
              onToggleFavorite={() => onToggleFavorite(coin.id)}
              isFavorite={
                coinsData?.find((coinInfo) => coinInfo.id === coin.id)
                  ?.isFavorite
              }
            />
          </li>
        ))}
      </div>
    </StyledList>
  );
}

const StyledList = styled.ul`

  list-style: none;
  max-width: 1140px;
  margin: auto;
`;

const StyledHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #26272b;
  box-shadow: 0px 0px 12px #18191b;
  border-radius: 8px;
  margin: 2rem 1rem;
  padding: 0.7rem 1rem;
  font-weight: 500;
  font-size: 0.75rem
`;

