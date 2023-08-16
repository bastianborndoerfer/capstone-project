import { useRouter } from "next/router";
import { styled } from "styled-components";

export default function ShowCoinDetails({ coins }) {
  const router = useRouter();
  const { id } = router.query;
  const clickedCoin = coins.find((coin) => coin.id === id);

  if (!clickedCoin) {
    return <h1>Error: 404 - Coin not found</h1>;
  }

  return (
    <ClickedCoinDetails
      mkrank={clickedCoin.market_cap_rank}
      mk={clickedCoin.market_cap}
      dailyhigh={clickedCoin.high_24h}
      dailylow={clickedCoin.low_24h}
      ath={clickedCoin.ath}
      athchange={clickedCoin.ath_change_percentage}

    />
  );
}
