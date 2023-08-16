import Coin from "../Coin";
import { styled } from "styled-components";

export default function List({ coins }) {
  return (
      <StyledList>
        {coins?.map((coin) => (
          <li key={coin.id}>
            <Coin
              image={coin.image}
              symbol={coin.symbol}
              price={coin.current_price}
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
