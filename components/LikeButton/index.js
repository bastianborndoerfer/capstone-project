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
          width={20}
          height={20}
        />
      )}
    </Button>
  );
}

const Button = styled.button`
  background: transparent;
  &:hover {
    background-color: lightgrey;
    border-radius: 100%;
    padding: 2px;
  }
  border: white;
  position: absolute;
  right: 24px;
  top: 20px;
  z-index: 1;
`;
