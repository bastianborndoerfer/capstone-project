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
          <h6>My Portfolio</h6>
          <p>
            {currencyFormat(currentPortfolioValue(positions))}
          </p>
        </StyledHoldings>
        <StyledHoldingDetails>
          <StyledList>
            <li>24H change:</li>
            <li>Total P/L:</li>
          </StyledList>
          <StyledChanges>
            <StyledListValue $positive={calculateTotalChangeUSD(positions) > 0}>
              {currencyFormat(calculateTotalChangeUSD(positions))}
            </StyledListValue>
            <StyledListValueB $positive={calculateTotalValue(positions) > 0}>
              {currencyFormat(calculateTotalValue(positions))}
            </StyledListValueB>
          </StyledChanges>
        </StyledHoldingDetails>
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  padding: 8px 8px 0 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  margin: auto;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 0 8px 4px #525252;
  font-size: 1.5rem;
  background-color: #383838;
`;

const StyledHoldings = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: left;
  gap: 0.5rem;
`;

const StyledHoldingDetails = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  margin: 1rem 0.2rem;
  padding: 1rem 0.3rem;
  font-size: 1rem;
`;

const StyledList = styled.ul`
  text-align: left;
`;

const StyledChanges = styled.ul`
  text-align: right;
`;

const StyledListValue = styled.li`
  color: ${(props) => (props.$positive ? "green" : "#ff4747")};
`;
const StyledListValueB = styled.li`
  color: ${(props) => (props.$positive ? "green" : "#ff4747")};
`;
