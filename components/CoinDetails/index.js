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
        <StyledTd alignRight>#{mcrank}</StyledTd>
      </tr>
      <tr>
        <StyledTd>Market Cap:</StyledTd>
        <StyledTd alignRight>{mc}</StyledTd>
      </tr>
      <tr>
        <StyledTd>24H High:</StyledTd>
        <StyledTd alignRight>{dailyhigh}</StyledTd>
      </tr>
      <tr>
        <StyledTd>24H Low:</StyledTd>
        <StyledTd alignRight>{dailylow}</StyledTd>
      </tr>
      <tr>
        <StyledTd>All Time High:</StyledTd>
        <StyledTd alignRight>{ath}</StyledTd>
      </tr>
      <tr>
        <StyledTd>All Time High Change:</StyledTd>
        <StyledTd alignRight>{athchange}</StyledTd>
      </tr>
    </StyledTable>
  );
}

const StyledTable = styled.table`
  margin: 24px auto;
  width: 90%;
  border-collapse: collapse;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f3f2ef;
  color: #656c6a;
`;

const StyledTd = styled.td`
  padding: 16px;
  text-align: ${(props) => (props.alignRight ? "right" : "left")};
  border-bottom: 1px solid #656c6a;
`;

//     <Wrapper>
//       <StyledList>
//         <StyledListItem>Market Cap Rank:</StyledListItem>
//         <StyledListItem>Market Cap:</StyledListItem>
//         <StyledListItem>24H High:</StyledListItem>
//         <StyledListItem>24H Low:</StyledListItem>
//         <StyledListItem>All Time High:</StyledListItem>
//         <StyledListItem>All Time High Change:</StyledListItem>
//       </StyledList>
//       <StyledList>
//       <StyledListItem>#{mcrank}</StyledListItem>
//         <StyledListItem>{mc}</StyledListItem>
//         <StyledListItem>{dailyhigh}</StyledListItem>
//         <StyledListItem>{dailylow}</StyledListItem>
//         <StyledListItem>{ath}</StyledListItem>
//         <StyledListItem>{athchange}</StyledListItem>
//       </StyledList>
//     </Wrapper>
//   );
// }

// const Wrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   background-color: #e4e3e2;
//   border-radius: 15px;
//   text-align: justify;
//   width: 90%;
//   margin: 24px auto;
// `;

// const StyledList = styled.ul`
//   list-style: none;
//   padding: 32px;
//   display: flex;
//   flex-direction: column;
//   gap: 16px;
// `;

// const StyledListItem = styled.li`
//   border-bottom: solid 0.025rem;
// `;

// const StyledListItemRight = styled(StyledListItem)`
//   justify-self: end;
//   text-align: right;
//   width: 100%;
//   padding-right: 16px;
// `;
