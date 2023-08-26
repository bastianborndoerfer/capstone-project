import styled from "styled-components";

export default function Holdings() {
  return (
    <StyledTable>
      <StyledThead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>24H</th>
          <th>Holding</th>
        </tr>
      </StyledThead>
      <StyledTbody>
        <tr>
          <td>Bitcoin</td>
          <td>28,000 $</td>
          <td>+0,25%</td>
          <td>2,222 $</td>
        </tr>
        <tr>
          <td>Etherium</td>
          <td>1,250 $</td>
          <td>-1,55%</td>
          <td>777 $</td>
        </tr>
        <tr>
          <td>Cardano</td>
          <td>0.250 $</td>
          <td>-6,75%</td>
          <td>111 $</td>
        </tr>
        <tr>
          <td>Ripple</td>
          <td>0.550 $</td>
          <td>-1,75%</td>
          <td>75 $</td>
        </tr>
      </StyledTbody>
    </StyledTable>
  );
}

const StyledTable = styled.table`
  width: 100%;
  padding: 32px;
  `;
  
  
  const StyledThead = styled.thead`
tr {
    color: darkgrey;
    display: flex;
    justify-content: space-around;
    width: 100%;
}
`;

const StyledTbody = styled.tbody`
  tr {
    display: flex;
    justify-content: space-around;
    width: 100%;
    border: solid .5px;
    border-radius: 15px;
    padding: 8px;
    margin: 8px;
  }
`;
