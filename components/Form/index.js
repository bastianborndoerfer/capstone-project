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
console.log(position)
  return (
    <Wrapper>
      <h3>Add Transaction:</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="price">
          Price per coin:
          <input
            type="number"
            name="price"
            id="price"
            defaultValue={position.price}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="quantity">
          Quantity:
          <input
            type="number"
            name="quantity"
            id="quantity"
            defaultValue={position.quantity}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="total">
          Total output:
          <input
            type="number"
            name="total"
            id="total"
            value={position.total}
            onChange={updateTotal}
            readOnly
            
          />
        </label>

        <label>
          Date:
          <input type="date" name="date" />
        </label>
        <button type="cancel">Cancel</button>

        <button type="submit">Submit</button>
      </form>
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

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 10px;
    }

    input[type="number"],
    input[type="date"] {
      width: 100%;
      padding: 8px;
      margin-top: 4px;
    }

    button {
      margin-top: 10px;
    }
  }
`;
