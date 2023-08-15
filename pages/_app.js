import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

async function fetcher(URL) {
  const res = await fetch(URL);

  if (!res.ok) {
    const error = new Error("An error occured while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig value={{ fetcher }}>
      <GlobalStyle />
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
