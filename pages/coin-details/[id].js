import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import CoinDetails from "@/components/CoinDetails";

export default function ShowCoinDetails({ coins }) {
  const [selectedCoin, setSelectedCoin] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    setSelectedCoin(coins.find((coin) => coin.id === id));
  }, [setSelectedCoin, coins, id]);

  useEffect(() => {
    let timeoutId;
    if (!selectedCoin) {
      timeoutId = setTimeout(() => router.push("/404"), 3000);
    }

    return () => clearTimeout(timeoutId);
  }, [selectedCoin, router]);

  if (!selectedCoin) {
    return null;
  }

  return (
    <CoinDetails
      mcrank={selectedCoin.market_cap_rank}
      mc={selectedCoin.market_cap}
      dailyhigh={selectedCoin.high_24h}
      dailylow={selectedCoin.low_24h}
      ath={selectedCoin.ath}
      athchange={selectedCoin.ath_change_percentage}
    />
  );
}
