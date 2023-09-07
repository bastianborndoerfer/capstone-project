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
            height={25}
            width={25}
            alt="chart icon"
            isActive={router.pathname === "/"}
          />
          <p>Market</p>
        </Link>
      </StyledLi>
      <StyledLi>
        <Link href={"./watchlist"}>
          <StyledImage
            src="/favoriteButton_aktiv.svg"
            height={25}
            width={25}
            alt="a star icon"
            isActive={router.pathname === "/watchlist"}
          />
          <p>Watchlist</p>
        </Link>
      </StyledLi>
      <StyledLi>
        <Link href={"./portfolio"}>
          <StyledImage
            src="/portfolio.svg"
            height={25}
            width={25}
            alt="portfolio icon"
            isActive={router.pathname === "/portfolio"}
          />
          <p>Portfolio</p>
        </Link>
      </StyledLi>
    </StyledUl>
  );
}

const StyledUl = styled.ul`
  position: fixed;
  width: 420px;
  bottom: 0;
  z-index: 100;
  height: 68px;
  margin: 0;
  padding: 8px;
  display: flex;
  justify-content: space-around;
  list-style: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  background-color: #fff;
  font-size: small ;
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
      transform: scale(1.4);
    `}
`;
