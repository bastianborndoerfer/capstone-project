import NavBar from "@/components/NavigationBar";
import Coin from "@/components/Coin";
import styled from "styled-components";
import Form from "@/components/Form";
import { useState } from "react";
import currencyFormat from "@/src/utils";

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
      <StyledHeader>My Watchlist</StyledHeader>
      {likedCoins.length === 0 ? (
        <EmptyState>The watchlist is empty!</EmptyState>
      ) : (
        <StyledList>
          {likedCoins?.map((coin) => (
            <StyledListItem key={coin.id}>
            <StyledButton
              type="button"
              onClick={() => toggleItemExpansion(coin.id)}
            >
              {expandedItems[coin.id] ? "-" : "+"}
            </StyledButton>

            <Coin
              image={coin.image}
              symbol={coin.symbol.toUpperCase()}
              price={currencyFormat(coin.current_price)}
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
                change={coin.price_change_percentage_24h}
                changeusd={coin.price_change_24h}
              />
            )}
          </StyledListItem>
        ))}
      </StyledList>
      )}
      <NavBar />
    </>
  );
}
const StyledHeader = styled.h2`
  padding: 20px;
  height: 80px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledList = styled.ul`
  padding: 0;
  padding-bottom: 48px;
  list-style: none;
`;

const StyledListItem = styled.li`
  position: relative;
`;

const StyledButton = styled.button`
  position: absolute;
  left: 12px;
  top: 16px;
  z-index: 33;
  border: none;
  background-color: transparent;
  font-size: large;
`;

const EmptyState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  text-align: center;
  font-size: 18px;
  color: gray;
`;
