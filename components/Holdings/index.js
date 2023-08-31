import Link from "next/link";
import styled from "styled-components";

export default function Holdings({ positions, onDeletePosition }) {
  function showButton(position) {
    const dialogId = `deleteDialog-${position.id}`;
    const dialog = document.getElementById(dialogId);
    dialog.showModal();
  }

  return (
    <StyledList>
      {positions.map((position, index) => (
        <StyledListItem key={position.id}>
          <p>{index + 1}.</p>
          <p>Price: {position.price}</p>
          <p>Quantity: {position.quantity}</p>
          <p>Total: {position.total}</p>
          <p>Date: {position.date}</p>
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
        </StyledListItem>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  padding: 0;
`;

const StyledListItem = styled.li`
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-evenly;
  border: 1px black solid;
`;
