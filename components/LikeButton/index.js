import Image from "next/image";
import styled from "styled-components";

export default function LikeButton({ isFavorite, onToggleFavorite }) {
  return (
    <div>
      <Button type="button" onClick={onToggleFavorite} isFavorite={isFavorite}>
        {isFavorite ? (
          <Image
            src={"/favoriteButton_aktiv.svg"}
            alt=""
            width={30}
            height={30}
          />
        ) : (
          <Image src={"/favoriteButton.svg"} alt="" width={30} height={30} />
        )}
      </Button>
    </div>
  );
}

const Button = styled.button`
  background-color: transparent;
  &:hover {
    background-color: lightgrey;
  }
  border: none;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  z-index: 1;
`;
