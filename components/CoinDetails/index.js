import CoinHeader from "../CoinHeader";

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
    <CoinHeader  />
    <ul>
      <li>{mcrank}</li>
      <li>{mc}</li>
      <li>{dailyhigh}</li>
      <li>{dailylow}</li>
      <li>{ath}</li>
      <li>{athchange}</li>
    </ul>
    </div>
  );
}
