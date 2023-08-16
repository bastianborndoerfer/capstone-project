import GlobalStyle from "../styles";
import useSWR from "swr";

// async function fetcher(URL) {
//   const res = await fetch(URL);

//   if (!res.ok) {
//     const error = new Error("An error occured while fetching the data.");
//     error.info = await res.json();
//     error.status = res.status;
//     throw error;
//   }
//   return res.json();
// }

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
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} coins={isLoading || error ? [] : data} />
    </>
  );
}
