import Image from "next/image";
import styled from "styled-components";

export default function NavBar() {
  return (
    <StyledFooter>
    <StyledUl>
      <li>
        <Image src="/market.svg" height={30} width={30} alt="" />
      </li>
      <li>
        <Image src="/favoriteButton_aktiv.svg" height={30} width={30} alt="" />
      </li>
      <li>
        <Image src="/portfolio.svg" height={30} width={30} alt="" />
      </li>
    </StyledUl>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
position: sticky;
bottom: 0.5rem;
z-index: 1;
border: solid;
background-color: lightgrey;
`;

const StyledUl = styled.ul`
display: flex;
justify-content: space-evenly;
list-style: none;
`;

