import NavBar from "@/components/NavigationBar";
import Coin from "@/components/Coin";
import styled from "styled-components";
import HeaderPages from "@/components/HeaderPages";

export default function Watchlist({ coinsData, onToggleFavorite }) {
  const favoriteCoinsInfo = coinsData.filter((coinInfo) => coinInfo.isFavorite);
  const likedCoins = coinsData.filter((coin) =>
    favoriteCoinsInfo.map((coinInfo) => coinInfo.id).includes(coin.id)
  );
  return (
    <>
      <section>
        <HeaderPages />
        <h2>My Watchlist</h2>
      </section>
      <StyledList>
        {likedCoins?.map((coin) => (
          <li key={coin.id}>
            <Coin
              image={coin.image}
              symbol={coin.symbol}
              price={coin.current_price}
              id={coin.id}
              name={coin.name}
              onToggleFavorite={() => onToggleFavorite(coin.id)}
              isFavorite={
                coinsData?.find((coinInfo) => coinInfo.id === coin.id)
                  ?.isFavorite
              }
            />
          </li>
        ))}
      </StyledList>
      <NavBar />
    </>
  );
}

const StyledList = styled.ul`
  padding: 0;
  padding-bottom: 48px;
  list-style: none;
`;
