import Image from "next/image";
import { useEffect } from "react";
import { useRef, useState } from "react";
import styled from "styled-components";
import { uid } from "uid";

export default function Form({ onAddPosition, image, price, symbol, name, change, changeusd }) {
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
    const updatedTotal =
      name === "price" ? value * position.quantity : position.price * value;
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
      img: image,
      name: name,
      symbol: symbol,
      currentprice: price,
      change24H: change,
      changeusd: changeusd,
      price: data.price,
      quantity: data.quantity,
      total: data.total,
      date: data.date,
    };
    onAddPosition(newPosition);
    event.target.reset();
  }

  function handleCancel() {
    setPosition({
      id: "",
      price: "",
      quantity: "",
      total: "",
      date: "",
    });
  }

  const formRef = useRef(null);
  useEffect(() => {
    formRef.current.scrollIntoView({behavior: "smooth"}); }, []);
  
  return (
    <Wrapper>
      <h3>Add Transaction:</h3>
      <StyledForm ref={formRef} onSubmit={handleSubmit}>
        <Image src={image} alt={name} height={25} width={25} />
        <p>
          {name}({symbol.toUpperCase()})
        </p>
        {/* <p>{price.hidden}</p>
        <p>{change.hidden}</p>
        <p>{changeusd.hidden}</p> */}
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
          <StyledInput type="date" name="date" required />
        </StyledLabel>
        <div>
          <StyledButton type="button" onClick={handleCancel}>
            Cancel
          </StyledButton>
          <StyledButton type="submit">Submit</StyledButton>
        </div>
      </StyledForm>
    </Wrapper>
  );
}

const Wrapper = styled.div`
 width: 250px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-top: 10px;
  box-shadow: 0 0 20px 8px #d0d0d0;
  margin: 0 auto;
  background: #f2f2f2;
  overflow: hidden;
  border-radius: 20px;
  color: #26272b;

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
