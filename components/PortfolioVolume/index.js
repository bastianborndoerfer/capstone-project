import styled from "styled-components";

export default function PortfolioValue({ positions }) {
  
  function currentPortfolioValue(position) {
    const totalValue = positions.reduce((sum, position) => {
      const currentPrice = position.currentprice;
      const quantity = position.quantity;
      const currentPositionValue = currentPrice * quantity;
      return sum + currentPositionValue;
    }, 0);
  
    return totalValue;
  }
    

  function calculateTotalValue(positions) {
    return positions.reduce((sum, position) => {
      const currentPrice = position.currentprice;
      const quantity = position.quantity;
      const totalSpent = position.total;
      const currentPositionValue = currentPrice * quantity - totalSpent;
      return sum + currentPositionValue;
    }, 0);
  }

  // function calculateTotalChangeUSD(positions) {
  //   return positions.reduce((sum, position) => sum + position.changeusd, 0);
  // }

  return (
    <StyledSection>
      <h3>My Holdings</h3>
      <p>
        <strong>
          <u>${currentPortfolioValue(positions).toFixed(2)}</u>
        </strong>
      </p>
      <ul>
        {/* <li>24H change: ${calculateTotalChangeUSD(positions).toFixed(4)}</li> */}
        <li>Total P/L: ${calculateTotalValue(positions).toFixed(2)}</li>
      </ul>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: solid black;
  border-radius: 15px;
  width: 75%;
  margin: auto;
  background-color: #fff9c4; /* Hellgelbe Hintergrundfarbe */
  background-image: repeating-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5) 10px,
    transparent 10px,
    transparent 20px
  );
`;
