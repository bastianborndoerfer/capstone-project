import Coin from "../Coin";
import { styled } from "styled-components";
import LikeButton from "../LikeButton";

export default function List({ coins }) {
  return (
    <StyledList>
      {coins?.map((coin) => (
        <li key={coin.id}>
          <Coin
            image={coin.image}
            symbol={coin.symbol}
            price={coin.current_price}
            id={coin.id}
            name={coin.name}
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
