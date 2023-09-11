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
            isactive={router.pathname === "/" ? "true" : "false"}
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
            isactive={router.pathname === "/watchlist" ? "true" : "false"}
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
            isactive={router.pathname === "/portfolio" ? "true" : "false"}
          />
          <p>Portfolio</p>
        </Link>
      </StyledLi>
    </StyledUl>
  );
}

const StyledUl = styled.ul`
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 100;
  height: 68px;
  margin: 0;
  padding: 8px;
  display: flex;
  justify-content: space-around;
  list-style: none;
  background-color: #1d2022;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  font-size: small;
`;

const StyledLi = styled.li`
  &:hover {
    transform: scale(1.2);
  }
`;

const StyledImage = styled(Image)`
  ${({ isactive }) =>
    isactive === "true" &&
    css`
      transform: scale(1.4);
    `}
  border: #f4f4f4;
`;