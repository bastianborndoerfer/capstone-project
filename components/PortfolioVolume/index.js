import styled from "styled-components";

export default function PortfolioValue({ positions }) {
  //My Holdings - aktueller Wert
  function currentPortfolioValue(positions) {
    const totalValue = positions.reduce((sum, position) => {
      const currentPrice = position.currentprice;
      const quantity = position.quantity;
      const currentPositionValue = currentPrice * quantity;
      return sum + currentPositionValue;
    }, 0);

    return totalValue;
  }

  // aktueller Gewinn/Verlust
  function calculateTotalValue(positions) {
    return positions.reduce((sum, position) => {
      const currentPrice = position.currentprice;
      const quantity = position.quantity;
      const totalSpent = position.total;
      const currentPositionValue = currentPrice * quantity - totalSpent;
      return sum + currentPositionValue;
    }, 0);
  }
  // 24 Stunden Veränderung des Portfolio
  function calculateTotalChangeUSD(positions) {
    return positions.reduce(
      (sum, position) => sum + position.changeusd * position.quantity,
      0
    );
  }

  return (
    <StyledSection>
      <h3>My Holdings</h3>
      <p>
        <strong>
          <u>{currentPortfolioValue(positions).toFixed(2)} $</u>
        </strong>
      </p>
      <ul>
        <li>24H change: {calculateTotalChangeUSD(positions).toFixed(2)}$</li>
        <li>Total P/L: {calculateTotalValue(positions).toFixed(2)}$</li>
      </ul>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  margin: auto;
  background: #f2f2f2;
  overflow: hidden;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 0 20px 8px #d0d0d0;
  
`;


