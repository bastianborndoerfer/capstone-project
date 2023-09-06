import Image from "next/image";
import styled from "styled-components";

export default function Header({ handleSearch }) {
  return (
    <StyledHeader>
      <StyledLogo>
      <Image src="/logo.svg" height={30} width={30} alt="A Logo Placeholder" />
      <h2>KryptoScout</h2>
      </StyledLogo>
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
  font-family: "inter";
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  height: 54px;
  background-color: #fff;
  color: #1c274c;
  position: fixed;
  z-index: 50;
  top: 0;
  right: 0;
  left: 0;
`;

const StyledLogo = styled.span`
display: flex;
flex-direction: column;
align-items: center;
h2 {
  margin-top: -8px;
  margin-bottom: 4px;
}
`;


const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
