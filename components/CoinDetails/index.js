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
    <Wrapper>
      <StyledList>
        <StyledListItem>Market Cap Rank: {mcrank}</StyledListItem>
        <StyledListItem>Market Cap:{mc}</StyledListItem>
        <StyledListItem>24H High: {dailyhigh}</StyledListItem>
        <StyledListItem>24H Low: {dailylow}</StyledListItem>
        <StyledListItem>All Time High: {ath}</StyledListItem>
        <StyledListItem>All Time High Change: {athchange}</StyledListItem>
      </StyledList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: inline-block;
  border: solid;
  border-radius: 15px;
  text-align: justify;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledListItem = styled.li`
  border-bottom: solid;
`;
