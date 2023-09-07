import Image from "next/image";
import styled from "styled-components";

export default function LikeButton({ isFavorite, onToggleFavorite }) {
  return (
    <Button type="button" onClick={onToggleFavorite} isFavorite={isFavorite}>
      {isFavorite ? (
        <Image
          src={"/favoriteButton_aktiv.svg"}
          alt="selected star favorite button"
          width={24}
          height={24}
        />
      ) : (
        <Image
          src={"/favoriteButton.svg"}
          alt="unselected star favorite button"
          width={24}
          height={24}
        />
      )}
    </Button>
  );
}

const Button = styled.button`
  background-color: transparent;
  &:hover {
    background-color: lightgrey;
    border-radius: 100%;
  }
  border: none;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
`;
