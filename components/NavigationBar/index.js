import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <StyledUl>
      <StyledLi>
        <Link href={"/"}>
          <StyledImage
            src="/market.svg"
            height={40}
            width={40}
            alt="chart icon"
            isActive={router.pathname === "/"}
          />
        </Link>
      </StyledLi>
      <StyledLi>
        <Link href={"./watchlist"}>
          <StyledImage
            src="/favoriteButton_aktiv.svg"
            height={40}
            width={40}
            alt="a star icon"
            isActive={router.pathname === "/watchlist"}
          />
        </Link>
      </StyledLi>
      <StyledLi>
        <Link href={"./portfolio"}>
          <StyledImage
            src="/portfolio.svg"
            height={40}
            width={40}
            alt="portfolio icon"
            isActive={router.pathname === "/portfolio"}
          />
        </Link>
      </StyledLi>
    </StyledUl>
  );
}

const StyledUl = styled.ul`
  position: fixed;
  width: 420px;
  bottom: 0;
  z-index: 1;
  height: 64px;
  margin: 0;
  padding: 8px;
  display: flex;
  justify-content: space-around;
  list-style: none;
  border: solid;
  border-radius: 15px 15px 0 0;
  box-shadow: 1px 1px 10px grey;
  background-color: white;  
`;

const StyledLi = styled.li`
  &:hover {
    transform: scale(1.2);
  }
`;

const StyledImage = styled(Image)`
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: antiquewhite;
    `}
`;
