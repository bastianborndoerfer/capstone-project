import NavBar from "@/components/NavigationBar";
import Coin from "@/components/Coin";
import styled from "styled-components";
import HeaderPages from "@/components/HeaderPages";
import Form from "@/components/Form";
import { useState } from "react";

export default function Watchlist({
  coinsData,
  onToggleFavorite,
  positions,
  onAddPosition,
}) {
  const [expandedItems, setExpandedItems] = useState({});

  const favoriteCoinsInfo = coinsData.filter((coinInfo) => coinInfo.isFavorite);
  const likedCoins = coinsData.filter((coin) =>
    favoriteCoinsInfo.map((coinInfo) => coinInfo.id).includes(coin.id)
  );

  const toggleItemExpansion = (coinId) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [coinId]: !prevState[coinId],
    }));
  };

  return (
    <>
      <section>
        <HeaderPages />
        <h2>My Watchlist</h2>
      </section>
      <StyledList>
        {likedCoins?.map((coin) => (
          <li key={coin.id}>
            <button type="button" onClick={() => toggleItemExpansion(coin.id)}>
              +
            </button>
            <Coin
              image={coin.image}
              symbol={coin.symbol}
              price={coin.current_price}
              id={coin.id}
              name={coin.name}
              change={coin.price_change_percentage_24h.toFixed(1)}
              onToggleFavorite={() => onToggleFavorite(coin.id)}
              isFavorite={
                coinsData?.find((coinInfo) => coinInfo.id === coin.id)
                  ?.isFavorite
              }
            />
            {expandedItems[coin.id] && (
              <Form
                positions={positions}
                onAddPosition={onAddPosition}
                image={coin.image}
                name={coin.name}
                symbol={coin.symbol}
                price={coin.current_price}
              />
            )}
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
