

export default function CoinDetails({
  mcrank,
  mc,
  dailyhigh,
  dailylow,
  ath,
  athchange,
}) {
  return (
    <div>
    <ul>
      <li>Market Cap Rank: {mcrank}</li>
      <li>Market Cap: {mc}</li>
      <li>24H High: {dailyhigh}</li>
      <li>24H Low: {dailylow}</li>
      <li>All Time High: {ath}</li>
      <li>All Time High Change: {athchange}</li>
    </ul>
    </div>
  );
}
