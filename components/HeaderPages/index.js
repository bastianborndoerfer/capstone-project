import Image from "next/image";
import styled from "styled-components";

export default function HeaderPages() {
  return (
    <StyledHeader>
      <Image
        src="/placeholder.png"
        height={100}
        width={100}
        alt="A Logo Placeholder"
      />
      <h1>KryptoScout</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
