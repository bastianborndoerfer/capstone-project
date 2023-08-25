import Coin from "../Coin";
import  styled  from "styled-components";

export default function List({ coinsData, onToggleFavorite }) {
  return (
    <StyledList>
      {coinsData?.map((coin) => (
        <li key={coin.id}>
          <Coin
            image={coin.image}
            symbol={coin.symbol}
            price={coin.current_price}
            id={coin.id}
            name={coin.name}
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
  padding: 0;
  padding-bottom: 48px;
  list-style: none;
`;
