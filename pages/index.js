import useSWR from "swr";

const URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL);
  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(data);
  
  return (
    <div>
      <h1>Hello from Next.js</h1>
    </div>
  );
}
