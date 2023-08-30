import styled from "styled-components";

export default function Holdings({ positions }) {
  return (
    <ul>
      {positions.map((position) => (
        <StyledList key={position.id}>
          <p>Price: {position.price}</p>
          <p>Quantity: {position.quantity}</p>
          <p>Total: {position.total}</p>
          <p>Date: {position.date}</p>
        </StyledList>
      ))}
    </ul>
  );
}



const StyledList = styled.li`
  display: flex;
  justify-content: space-evenly;
  border: 1px black solid;
`;
