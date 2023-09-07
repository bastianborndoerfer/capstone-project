import { useRouter } from "next/router";
import CoinDetails from "@/components/CoinDetails";
import CoinHeader from "@/components/CoinHeader";
import Chart from "@/components/ChartView";
import styled from "styled-components";

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
        symbol={selectedCoin.symbol.toUpperCase()}
        isFavorite={selectedCoin.isFavorite}
        onToggleFavorite={() => onToggleFavorite(selectedCoin.id)}
      />
      <StyledPrice>
        <p>${selectedCoin.current_price}</p>
        <StyledPercent isNegative={selectedCoin.price_change_percentage_24h < 0}>
          <p>{selectedCoin.price_change_percentage_24h.toFixed(2)}%</p>
        </StyledPercent>
      </StyledPrice>
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

const StyledPrice = styled.div`
display: flex;
gap: 1rem;;
font-size: xx-large;
font-weight: 400;
margin-left: 16px;
align-items: center;
`;

const StyledPercent = styled.span`
  color: ${(props) => (props.isNegative ? "red" : "green")};
  font-size: medium;
`;
