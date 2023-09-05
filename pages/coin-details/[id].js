import { useRouter } from "next/router";
import CoinDetails from "@/components/CoinDetails";
import CoinHeader from "@/components/CoinHeader";
import Chart from "@/components/ChartView";

export default function ShowCoinDetails({ coinsData, onToggleFavorite }) {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return null;
  }

  const selectedCoin = coinsData.find((coin) => coin.id === id);

  if (!selectedCoin) {
    router.push("/404");
  }

  return (
    <>
      <CoinHeader
        image={selectedCoin.image}
        name={selectedCoin.name}
        symbol={selectedCoin.symbol}
        isFavorite={selectedCoin.isFavorite}
        onToggleFavorite={() => onToggleFavorite(selectedCoin.id)}
      />
      <p>
        $ {selectedCoin.current_price}{" "}
        {selectedCoin.price_change_percentage_24h}
      </p>
      <Chart id={selectedCoin.id} />
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
