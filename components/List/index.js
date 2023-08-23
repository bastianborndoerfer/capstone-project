import Coin from "../Coin";
import { styled } from "styled-components";


export default function List({ coinsInfo, onToggleFavorite, isFavorite }) {
  return (
    <StyledList>
      {coinsInfo?.map((coin) => (
        <li key={coin.id}>
          <Coin
            image={coin.image}
            symbol={coin.symbol}
            price={coin.current_price}
            id={coin.id}
            name={coin.name}
            onToggleFavorite={onToggleFavorite}
            isFavorite={isFavorite}
          />
        </li>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  padding: 0;
  list-style: none;
`;
