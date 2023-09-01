import styled from "styled-components";

export default function Holdings({ positions, onDeletePosition, image, price, symbol, name  }) {
  function showButton(position) {
    const dialogId = `deleteDialog-${position.id}`;
    const dialog = document.getElementById(dialogId);
    dialog.showModal();
  }

  return (
    <StyledList>
      {/* zu ändern in table/tr/th..., wenn es bei spaltenüberschriften bleiben soll! */}
      <StyledListHeader>
        <p>#</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total spent</p>
        <p>Date</p>
      </StyledListHeader>
      {positions.map((position, index) => (
        <StyledListItem key={position.id}>
          <p>{index + 1}.</p>
          <p>{name}</p>
          <p>{position.price}</p>
          <p>{position.quantity}</p>
          <p>{position.total}</p>
          <p>{position.date}</p>
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

const StyledListHeader = styled.li`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledListItem = styled.li`
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px black solid;
`;
