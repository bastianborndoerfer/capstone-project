import { useState } from "react";
import GlobalStyle from "../styles";
import data from "../lib/data";

export default function App({ Component, pageProps }) {
  const [coinsData, setCoinsData] = useState(data);

  function handleToggleFavorite(id) {

    const selectedCoin = coinsData.find((coin) => coin.id === id);

    if (selectedCoin) {
      const updatedCoinsData = coinsData.map((coinData) => {
        if (coinData.id === id) {
          return {
            ...coinData,
            isFavorite: !selectedCoin.isFavorite,
          };
        }
        return coinData;
      });
      setCoinsData(updatedCoinsData);
    }
  }

  console.log(coinsData);
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        coinsData={coinsData}
        onToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
