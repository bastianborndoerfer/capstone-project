import Image from "next/image";
import styled from "styled-components";

export default function Header({ handleSearch }) {
  return (
    <StyledHeader>
      <Image
        src="/placeholder.png"
        height={100}
        width={100}
        alt="A Logo Placeholder"
      />
      <h1>KryptoScout</h1>
      <StyledInput
        type="text"
        placeholder="Search for a coin ..."
        onChange={handleSearch}
      />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
