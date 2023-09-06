import Coin from "../Coin";
import  styled  from "styled-components";

export default function List({ coinsData, onToggleFavorite }) {
  
  function currencyFormat(num) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  return (
    <StyledList>
      {coinsData?.map((coin) => (
        <li key={coin.id}>
          <Coin
            image={coin.image}
            symbol={coin.symbol}
            price={currencyFormat(coin.current_price)}
            id={coin.id}
            name={coin.name}
            change={coin.price_change_percentage_24h.toFixed(1)}
            marketcap={currencyFormat(coin.market_cap)}
            rank={coin.market_cap_rank}
            onToggleFavorite={() => onToggleFavorite(coin.id)}
            isFavorite={
              coinsData?.find((coinInfo) => coinInfo.id === coin.id)
                ?.isFavorite
            }
          />
        </li>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  padding: 48px 0 48px 0;
  //padding-bottom: 48px;
  list-style: none;
`;
