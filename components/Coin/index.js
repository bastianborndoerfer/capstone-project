import Image from "next/image";
import { styled } from "styled-components";

export default function Coin({ image, name, symbol, price }) {
  return (
    <StyledArticle>
      <Wrapper>
        <StyledImage src={image} alt={name} height={25} width={25} />
        <p>{symbol}</p>
        <p>{price} $</p>
      </Wrapper>
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 8px;
  border: black solid 2px;
  border-radius: 15px;
  text-transform: uppercase;
`;

const StyledImage = styled(Image)`
  align-self: center;
`;
