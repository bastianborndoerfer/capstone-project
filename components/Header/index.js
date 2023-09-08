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
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  margin: 24px;
  height: 32px;
`;

const StyledLogo = styled.span`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 24px;
`;


const StyledInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  ;
`;

