import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import currencyFormat from "@/src/utils";

export default function Holdings({ positions, onDeletePosition }) {
  const [showDetails, setShowDetails] = useState(null);

  // Funktion für den Löschdialog
  function showButton(position) {
    const dialogId = `deleteDialog-${position.id}`;
    const dialog = document.getElementById(dialogId);
    dialog.showModal();
  }
  // ermittelt den aktuellen Wert der Position
  function getCurrentPositionValue(position) {
    const currentPrice = position.currentprice;
    const quantity = position.quantity;
    const totalSpent = position.total;
    const currentPositionValue = currentPrice * quantity;
    return currentPositionValue;
  }
  //Funktion für den Toggle der KaufDetails
  function toggleDetails(positionId) {
    setShowDetails((prevId) => (prevId === positionId ? null : positionId));
  }

  return (
    <StyledList>
      <StyledListHeader>
        <p>#</p>
        <p>Coin</p>
        <p>Price</p>
        <p>24H</p>
        <p>Holding</p>
      </StyledListHeader>
      {positions.map((position, index) => (
        <StyledListItem key={position.id}>
          <StyledCoinInfo>
            <p>{index + 1}.</p>
            <StyledImageContainer>
              <Image
                src={position.img}
                alt={position.symbol}
                width={20}
                height={20}
              />

              <p>
                {position.name}({position.symbol.toUpperCase()}){" "}
              </p>
            </StyledImageContainer>
            <p>{currencyFormat(position.currentprice)}</p>
            <p>{position.change24H.toFixed(1)}%</p>
            <p>$ {getCurrentPositionValue(position).toFixed(2)}</p>
          </StyledCoinInfo>
          <ButtonContainer>
            <StyledDeleteButton onClick={() => showButton(position)}>
              <Image src={"/delete.svg"} width={15} height={15} alt="delete button"/>
            </StyledDeleteButton>
            <StyledDialog id={`deleteDialog-${position.id}`}>
              <StyledDialogWarning>
                Do you really want to delete the position?
              </StyledDialogWarning>
              <form method="dialog">
                <div>
                  <ConfirmButton onClick={() => onDeletePosition(position)}>
                    Confirm
                  </ConfirmButton>
                  <CancelButton>Cancel</CancelButton>
                </div>
              </form>
            </StyledDialog>
            <StyledInfoButton onClick={() => toggleDetails(position.id)}>
              <Image src={"/info.svg"} width={15} height={15} alt="info button" />
            </StyledInfoButton>
          </ButtonContainer>
          {showDetails === position.id && (
            <StyledDetails>
              <StyledH4>Purchase Details</StyledH4>
              <p>Price per coin: {position.price}</p>
              <p>
                Quantity: {position.quantity}({position.symbol.toUpperCase()})
              </p>
              <p>Total spent: {position.total}</p>
              <p>Date: {position.date}</p>
            </StyledDetails>
          )}
        </StyledListItem>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  margin: 8px auto;
  overflow: hidden;
`;

const StyledListHeader = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: #26272b;
  box-shadow: 0px 0px 12px #18191b;
  border-radius: 8px;
  margin: 2rem 1rem;
  padding: 0.7rem 0.5rem;
  font-size: 0.75rem;
`;

const StyledH4 = styled.h4`
  font-size: 1rem;
`;

const StyledListItem = styled.li`
  align-items: center;
  justify-items: center;
  background-color: #26272b;
  box-shadow: 0px 0px 12px #18191b;
  border-radius: 8px;
  margin: 2rem 1rem;
  padding: 0.7rem 0.5rem;
  font-size: 0.75rem;
`;

const StyledCoinInfo = styled.div`
  display: grid;
  grid-template-columns: 30px 60px 80px 30px auto;
  align-items: center;
  gap: 1.72em;
  grid-row: 1 / 3;
  grid-column: 1;
  margin-top: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  gap: 8px;
  grid-row: 3;
  grid-column: 1;
  margin-top: 3%;
`;

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-items: center;
  grid-row: 4;
  grid-column: 1;
`;

const StyledDialog = styled.dialog`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border: none;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  border-radius: 4px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const ConfirmButton = styled(StyledButton)`
  background-color: #36ce5a;
  color: white;
`;

const CancelButton = styled(StyledButton)`
  background-color: #ff4747;
  color: white;
`;

const StyledDialogWarning = styled.p`
  font-size: 1rem;
`;

const StyledImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 8%;
  margin-top: -24%;
`;

const StyledDeleteButton = styled.button`
  background-color: #ff4747;
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  border-radius: 2.5px;
  padding: 2px;
`;

const StyledInfoButton = styled.button`
  background-color: #068fff;
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  border-radius: 2.5px;
  padding: 2px;
`;
