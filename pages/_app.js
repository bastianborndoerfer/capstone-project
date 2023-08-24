import { useState } from "react";
import GlobalStyle from "../styles";
import data from "../lib/data";



export default function App({ Component, pageProps }) {
  const [coinsData, setcoinsData] = useState(data);
  const [coinsDataInfo, setCoinsDataInfo] = useState([]);

  function handleToggleFavorite(id) {
    const coinData = coinsDataInfo.find((coin) => coin.id === id);
    if (coinData) {
      setCoinsDataInfo(
        coinsDataInfo.map((coinInfo) =>
          coinInfo.id === id
            ? { id, isFavorite: !coinInfo.isFavorite }
            : coinInfo
        )
      );
    } else {
      setCoinsDataInfo([...coinsDataInfo, { id, isFavorite: true }]);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        coinsData={coinsData}
        coinsDataInfo={coinsDataInfo}
        onToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
