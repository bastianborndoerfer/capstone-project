import Image from "next/image";
import styled from "styled-components";

export default function Header({ handleSearch }) {
  return (
    <StyledHeader>
      <Image src="/logo.svg" height={50} width={50} alt="A Logo Placeholder" />
      <h2>KryptoScout</h2>
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
  
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  height: 54px;
  background-color: #039a9a;
  color: #1c274c;
  position: fixed;
  z-index: 50;
  top: 0;
  right: 0;
  left: 0;
`;

const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
