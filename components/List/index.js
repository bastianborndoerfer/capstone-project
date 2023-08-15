import ListItem from "../ListItem";
import { styled } from "styled-components";

export default function List({ coins }) {
  return (
    <div>
      <StyledList>
        {coins.map((coin) => (
          <StyledListItems key={coin.id}>
            <ListItem
              image={coin.image}
              symbol={coin.symbol}
              price={coin.current_price}
            />
          </StyledListItems>
        ))}
      </StyledList>
    </div>
  );
}

const StyledList = styled.ul`
padding: 0;
`;

const StyledListItems = styled.li`
list-style: none;
`;
