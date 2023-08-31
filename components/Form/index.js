import { useState } from "react";
import styled from "styled-components";
import { uid } from "uid";

export default function Form({ onAddPosition }) {
  const [position, setPosition] = useState({
    id: "",
    price: "",
    quantity: "",
    total: "",
    date: "",
  });

  function handleChange(event) {
    setPosition({
      ...position,
      [event.target.name]: event.target.value || "",
    });
  
    if (event.target.name === "price" || event.target.name === "quantity") {
      updateTotal(event.target.name, event.target.value);
    }
  }
  
  function updateTotal(name, value) {
    const updatedTotal = name === "price" ? value * position.quantity : position.price * value;
    setPosition((prevState) => ({
      ...prevState,
      total: updatedTotal,
    }));
  }


  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newId = uid();

    const newPosition = {
      ...position,
      id: newId,
      price: data.price,
      quantity: data.quantity,
      total: data.total,
      date: data.date,
    };
    onAddPosition(newPosition);
    event.target.reset();
  }
  return (
    <Wrapper>
      <h3>Add Transaction:</h3>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>
          Price per coin:
          <StyledInput
            type="number"
            name="price"
            value={position.price}
            onChange={handleChange}
            required
          />
        </StyledLabel>

        <StyledLabel>
          Quantity:
          <StyledInput
            type="number"
            name="quantity"
            value={position.quantity}
            onChange={handleChange}
            required
          />
        </StyledLabel>

        <StyledLabel>
          Total output:
          <StyledInput
            type="number"
            name="total"
            value={position.total}
            onChange={updateTotal}
            readOnly
            
          />
        </StyledLabel>

        <StyledLabel>
          Date:
          <StyledInput type="date" name="date"/>
        </StyledLabel>
        <StyledButton type="cancel">Cancel</StyledButton>

        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: lightgray;
  margin-top: 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2); /* Add a subtle shadow */
  margin: 0 auto;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 4px;
`;

const StyledButton = styled.button`
  margin-top: 10px;
`;

