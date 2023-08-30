import styled from "styled-components";

export default function Holdings({ positions }) {
  return (
    <StyledUl>
      {positions.map((position, index) => (
        <StyledList key={position.id}>
          <p>{index + 1}.</p>
          <p>Price: {position.price}</p>
          <p>Quantity: {position.quantity}</p>
          <p>Total: {position.total}</p>
          <p>Date: {position.date}</p>
        </StyledList>
      ))}
    </StyledUl>
  );
}

const StyledUl = styled.ul`
padding: 0;
`;

const StyledList = styled.li`
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-evenly;
  border: 1px black solid;
`;
