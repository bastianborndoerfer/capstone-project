import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import CoinDetails from "@/components/CoinDetails";
import CoinHeader from "@/components/CoinHeader";

export default function ShowCoinDetails({ coins, coinsInfo, onToggleFavorite }) {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return null;
  }

  const selectedCoin = coinsInfo.find((coin) => coin.id === id);

  if (!selectedCoin) {
    router.push("/404");
  }

  return (
    <>
      <CoinHeader
        image={selectedCoin.image}
        name={selectedCoin.name}
        symbol={selectedCoin.symbol}
        isFavorite={
          coinsInfo?.find((coinInfo) => coinInfo.id === selectedCoin.id)?.isFavorite
        }
        onToggleFavorite={() => onToggleFavorite(selectedCoinCoin.id)}
      />
      <p>
        $ {selectedCoin.current_price}{" "}
        {selectedCoin.price_change_percentage_24h}
      </p>
      <CoinDetails
        mcrank={selectedCoin.market_cap_rank}
        mc={selectedCoin.market_cap}
        dailyhigh={selectedCoin.high_24h}
        dailylow={selectedCoin.low_24h}
        ath={selectedCoin.ath}
        athchange={selectedCoin.ath_change_percentage}
      />
    </>
  );
}
