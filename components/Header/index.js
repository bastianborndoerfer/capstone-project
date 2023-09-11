import Image from "next/image";
import styled from "styled-components";

export default function Header({ handleSearch }) {
  return (
    <StyledHeader>
      <StyledLogo>
        <StyledImageContainer>
          <Image
            src="/logo.svg"
            height={30}
            width={30}
            alt="A Logo Placeholder"
          />
        </StyledImageContainer>
        <StyledH2>KryptoScout</StyledH2>
      </StyledLogo>
      <StyledInput
        type="text"
        placeholder="Search for a coin ..."
        onChange={handleSearch}
        maxLength={30}
      />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 24px 12px;
  margin-top: 30px;
  height: 32px;
`;

const StyledLogo = styled.span`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 10em;
`;

const StyledH2 = styled.h2`
  margin: 0;
  margin-top: -15px;
`;

const StyledImageContainer = styled.div`
  margin-top: 10px;
`;
