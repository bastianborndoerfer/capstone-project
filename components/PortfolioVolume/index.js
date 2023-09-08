import styled from "styled-components";
import currencyFormat from "@/src/utils";

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
    <>
      <StyledSection>
        <StyledHoldings>
          <p>My Holdings</p>
          <p><u>{currencyFormat(currentPortfolioValue(positions))}</u></p>
        </StyledHoldings>
        <StyledHoldingDetails>
          <ul>
            <li>24H change:</li>
            <li>Total P/L:</li>
          </ul>
          <ul>
            <li>{currencyFormat(calculateTotalChangeUSD(positions))}</li>
            <li>{currencyFormat(calculateTotalValue(positions))}</li>
          </ul>
        </StyledHoldingDetails>
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 75%;
  margin: auto;
  overflow: hidden;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 0 4px 2px #f4f4f4;
`;

const StyledHoldings = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: left;
  margin: 8px;
  gap: 1rem;
`;

const StyledHoldingDetails = styled.div`
  margin: 24px 8px 8px ;
  list-style: none;
  display: flex;
  justify-content: space-between;
  text-align: left;
`;
