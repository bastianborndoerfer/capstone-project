import Image from "next/image";
import { useEffect } from "react";
import { useRef, useState } from "react";
import styled from "styled-components";
import { uid } from "uid";

export default function Form({
  onAddPosition,
  image,
  price,
  symbol,
  name,
  change,
  changeusd,
  onCancel,
}) {
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

  function handleCancel(event) {
    event.preventDefault();
    console.log("button geklickt");
    setPosition({
      id: "",
      price: "",
      quantity: "",
      total: "",
      date: "",
    });
    if (onCancel) onCancel();
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

    if (onCancel) onCancel();
  }

  const formRef = useRef(null);
  useEffect(() => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  // habe um sämtliche label/input dinger ein div gesetzt, damit das input nicht mehr im label liegt. da hat es
  // nämlich nichts zu suchen ^^

  return (
    <Wrapper>
      <h3>Add Transaction:</h3>
      <StyledForm ref={formRef} onSubmit={handleSubmit}>
        <Image src={image} alt={name} height={25} width={25} />
        <p>
          {name}({symbol.toUpperCase()})
        </p>
        <StyledContainer>
          <label>Price per coin:</label>
          <StyledInput
            type="number"
            name="price"
            value={position.price}
            onChange={handleChange}
            required
          />
        </StyledContainer>

        <StyledContainer>
          <label>Quantity:</label>
          <StyledInput
            type="number"
            name="quantity"
            value={position.quantity}
            onChange={handleChange}
            required
          />
        </StyledContainer>

        <StyledContainer>
          <label>Total output:</label>
          <StyledInput
            type="number"
            name="total"
            value={position.total}
            onChange={updateTotal}
            readOnly
          />
        </StyledContainer>

        <StyledContainer>
          <label>Date:</label>
          <StyledInput type="date" name="date" required />
        </StyledContainer>
        <StyledButtons>
          <StyledCancelButton type="button" onClick={handleCancel}>
            Cancel
          </StyledCancelButton>
          <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
        </StyledButtons>
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
  box-shadow: 0 0 20px 8px #f4f4f4;
  margin: 0 auto;
  //background: #f2f2f2;
  overflow: hidden;
  border-radius: 20px;
  //color: #26272b;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 4px;
`;

const StyledSubmitButton = styled.button`
  padding: 4px;
  background-color: #36ce5a;
  border: none;
  border-radius: 8px;
  color: #f4f4f4;
`;
const StyledCancelButton = styled.button`
  padding: 4px;
  background-color: transparent;
  border: solid #f4f4f4 1px;
  border-radius: 8px;
  color: #f4f4f4;
`;

const StyledButtons = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-top: 8px;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
`;