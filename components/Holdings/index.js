import styled from "styled-components";

export default function Holdings({ positions }) {
  return (
    <StyledList>
      {positions.map((position, index) => (
        <StyledListItem key={position.id}>
          <p>{index + 1}.</p>
          <p>Price: {position.price}</p>
          <p>Quantity: {position.quantity}</p>
          <p>Total: {position.total}</p>
          <p>Date: {position.date}</p>
        </StyledListItem>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
padding: 0;
`;

const StyledListItem = styled.li`
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-evenly;
  border: 1px black solid;
`;
