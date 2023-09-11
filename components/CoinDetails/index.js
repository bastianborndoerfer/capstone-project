import styled from "styled-components";

export default function CoinDetails({
  mcrank,
  mc,
  dailyhigh,
  dailylow,
  ath,
  athchange,
}) {
  return (
    <StyledTable>
      <tr>
        <StyledTd>Market Cap Rank:</StyledTd>
        <StyledTd $alignRight>#{mcrank}</StyledTd>
      </tr>
      <tr>
        <StyledTd>Market Cap:</StyledTd>
        <StyledTd $alignRight>{mc}</StyledTd>
      </tr>
      <tr>
        <StyledTd>24H High:</StyledTd>
        <StyledTd $alignRight>{dailyhigh}</StyledTd>
      </tr>
      <tr>
        <StyledTd>24H Low:</StyledTd>
        <StyledTd $alignRight>{dailylow}</StyledTd>
      </tr>
      <tr>
        <StyledTd>All Time High:</StyledTd>
        <StyledTd $alignRight>{ath}</StyledTd>
      </tr>
      <tr>
        <StyledTd>All Time High Change:</StyledTd>
        <StyledTd $alignRight>{athchange}%</StyledTd>
      </tr>
    </StyledTable>
  );
}

const StyledTable = styled.table`
  margin: 40px auto;
  width: 90%;
  border-collapse: collapse;
  box-shadow: 0 0 8px 4px #f4f4f4;
  color: #f4f4f4;
  overflow: hidden;
  border-radius: 20px;
  cursor: pointer;
`;

const StyledTd = styled.td`
  padding: 16px;
  text-align: ${(props) => (props.$alignRight ? "right" : "left")};
  border-bottom: 1px solid #656c6a;
`;
