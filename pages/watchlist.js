import NavBar from "@/components/NavigationBar";
import Coin from "@/components/Coin";
import styled from "styled-components";
import Form from "@/components/Form";
import { useState } from "react";
import currencyFormat from "@/src/utils";
import CoinWatchlist from "@/components/CoinWatchlist";

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
      <h2>My Watchlist</h2>
      <StyledHeading>
        <p>Coin</p>
        <p>Price</p>
        <p>24h</p>
        <p>WL</p>
      </StyledHeading>
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

              <CoinWatchlist
                image={coin.image}
                symbol={coin.symbol.toUpperCase()}
                price={currencyFormat(coin.current_price)}
                id={coin.id}
                name={coin.name}
                change={coin.price_change_percentage_24h.toFixed(2)}
                changeusd={currencyFormat(coin.price_change_24h)}
                onToggleFavorite={() => onToggleFavorite(coin.id)}
                $isFavorite={
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
                  onCancel={() => toggleItemExpansion(coin.id)}
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

//onCancel() hinzugefügt

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
  left: 24px;
  top: 16px;
  z-index: 33;
  font-size: x-large;
  font-weight: 500;
  background-color: transparent;
  border: none;
  color: #f4f4f4;
  cursor: pointer;
  z-index: 100;
`;

const EmptyState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-size: 1.5rem;
  color: gray;
`;

const StyledHeading = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #26272b;
  box-shadow: 0px 0px 12px #18191b;
  border-radius: 8px;
  margin: 2rem 1rem;
  padding: 0.7rem 1rem;
  font-weight: 500;
  font-size: 0.75rem;
`;