import Header from "@/components/Header";
import NavBar from "@/components/NavigationBar";
import Coin from "@/components/Coin";
import styled from "styled-components";

export default function Watchlist({
  coinsDataInfo,
  coinsData,
  onToggleFavorite,
}) {
  const likedCoins = coinsData.filter((coin) =>
    coinsDataInfo.find(
      (coinData) => coinData.id === coin.id && coinData.isFavorite
    )
  );
  return (
    <>
      <section>
        <Header />
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
                coinsDataInfo?.find((coinInfo) => coinInfo.id === coin.id)
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
  list-style: none;
`;
