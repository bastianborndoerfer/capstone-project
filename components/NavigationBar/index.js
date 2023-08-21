import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function NavBar() {
  return (
    <StyledFooter>
      <StyledUl>
        <StyledLi>
          <Link href={"/"}>
            <Image src="/market.svg" height={30} width={30} alt="" />
          </Link>
        </StyledLi>
        <StyledLi>
        <Link href={"./watchlist"}>
          <Image
            src="/favoriteButton_aktiv.svg"
            height={30}
            width={30}
            alt=""
          />
          </Link>
        </StyledLi>
        <StyledLi>
          <Image src="/portfolio.svg" height={30} width={30} alt="" />
        </StyledLi>
      </StyledUl>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: sticky;
  bottom: 0;
  z-index: 10;
`;

const StyledUl = styled.ul`
  padding: 8px;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  border: solid;
  border-radius: 15px 15px 0 0;
  box-shadow: 1px 1px 10px grey;
  background-color: lightgrey;
  `;
const StyledLi = styled.li`
&:hover {
    background-color: grey;
}

`;