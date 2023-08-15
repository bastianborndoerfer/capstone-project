import ListItem from "../ListItem";
import { styled } from "styled-components";

export default function List({ coins }) {
  return (
    <div>
      <ul>
        {coins.map((coin) => (
          <StyledListItems key={coin.id}>
            <ListItem
              image={coin.image}
              symbol={coin.symbol}
              price={coin.current_price}
            />
          </StyledListItems>
        ))}
      </ul>
    </div>
  );
}

const StyledListItems = styled.li`
list-style: none;
`;
