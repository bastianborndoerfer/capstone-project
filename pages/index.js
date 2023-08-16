import useSWR from "swr";
import Header from "@/components/Header";
import List from "@/components/List";
import { Component } from "react";

//const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false&locale=en";

export default function HomePage({ coins }) {
  // const { data, error, isLoading } = useSWR(URL);
  // if (error) return <div>{error.message}</div>;
  // if (isLoading) return <div>loading...</div>;
  // console.log(data);

  return (
    <div>
      <Header />
      <List coins={coins} />
    </div>
  );
}
