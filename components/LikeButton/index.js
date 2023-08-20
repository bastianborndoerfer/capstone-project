import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  function toggleLiked() {
    setLiked(!liked);
  }

  return (
    <div>
      <Button type="button" onClick={toggleLiked}>
        {liked ? (
          <Image src={"/favoriteButton_aktiv.svg"} alt="" width={30} height={30} />
        ) : (
          <Image
            src={"/favoriteButton.svg"}
            alt=""
            width={30}
            height={30}
          />
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
  right: .5rem;
  top: .5rem;
  z-index: 1;
`;
