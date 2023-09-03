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
  background-color: #f3f2ef;
  align-items: center;
  border: 1px solid black;
  border-radius: 15px;
  width: 75%;
  margin: auto;
  
`;


