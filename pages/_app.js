import { useState } from "react";
import GlobalStyle from "../styles";
import useSWR from "swr";

const fetcher = async (...args) => {
  const response = await fetch(...args);
  if (!response.ok) {
    throw new Error(`Request with ${JSON.stringify(args)} failed.`);
  }
  return await response.json();
};

export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false&locale=en",
    fetcher
  );

  const [coinsInfo, setCoinsInfo] = useState([]);

  function handleToggleFavorite(id) {
    const likedCoin = coinsInfo.find((coin) => coin.id === id);
    if (likedCoin) {
      setCoinsInfo(
        coinsInfo.map((coinInfo) =>
          coinInfo.id === id
            ? { id, isFavorite: !coinInfo.isFavorite }
            : coinInfo
        )
      );
    } else {
      setCoinsInfo([...coinsInfo, { id, isFavorite: true }]);
    }
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        coins={data}
        coinsInfo={coinsInfo}
        onToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
