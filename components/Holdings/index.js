import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import currencyFormat from "@/src/utils";

export default function Holdings({ positions, onDeletePosition }) {
  const [showDetails, setShowDetails] = useState(false);

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
  function toggleDetails() {
    setShowDetails(!showDetails);
  }

  return (
    <StyledList>
      {/* zu ändern in table/tr/th..., wenn es bei spaltenüberschriften bleiben soll! */}
      <StyledListHeader>
        <p>#</p>
        <p>Coin</p>
        <p>Price</p>
        <p>24H</p>
        <p>Holding</p>
      </StyledListHeader>
      {positions.map((position, index) => (
        <StyledListItem key={position.id}>
          <p>{index + 1}.</p>
          <StyledCoinInfo>
            <Image
              src={position.img}
              alt={position.symbol}
              width={20}
              height={20}
            />
            {position.name}({position.symbol.toUpperCase()})
          </StyledCoinInfo>
          <p>{currencyFormat(position.currentprice)}</p>
          <p>{position.change24H.toFixed(1)}%</p>

          <p>{position.price.hidden}</p>
          <p>{position.total.hidden}</p>
          <p>{position.date.hidden}</p>
          <StyledCoinInfo>
            ${getCurrentPositionValue(position).toFixed(2)}
            <p>
              {position.quantity}({position.symbol.toUpperCase()})
            </p>
          </StyledCoinInfo>
          <ButtonContainer>
            <button onClick={() => showButton(position)}>X</button>
            <dialog id={`deleteDialog-${position.id}`}>
              <p>Do you really want to delete the position?</p>
              <form method="dialog">
                <div>
                  <button>Cancel</button>
                  <button onClick={() => onDeletePosition(position)}>
                    Confirm
                  </button>
                </div>
              </form>
            </dialog>
            <button onClick={toggleDetails}>i</button>
            {showDetails && (
              <StyledDetails>
                <h4>Purchase Details</h4>
                <p>Price per coin:{position.price}</p>
                <p>Total spent:{position.total}</p>
                <p>Date:{position.date}</p>
              </StyledDetails>
            )}
          </ButtonContainer>
        </StyledListItem>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  padding: 0;
  margin: 32px auto;
  font-size: small;
  width: 95%;
  overflow: hidden;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 0 4px 2px #f4f4f4;
  `;

const StyledListHeader = styled.li`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px black solid;
  margin: 8px 0 8px 0;
`;

const StyledListItem = styled.li`
  padding: 10px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px black solid;
`;

const StyledCoinInfo = styled.div`
  padding: 8px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: x-small;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: x-small;
`;
