import Header from "@/components/Header";
import List from "@/components/List";
import NavBar from "@/components/NavigationBar";
import { useState } from "react";

export default function HomePage({ coinsData, onToggleFavorite }) {
  const [search, setSearch] = useState("");

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  const searchedCoinsData = coinsData.filter(
    (coin) =>
      coin.id.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <Header onSearch={handleSearch} />
      <List coinsData={searchedCoinsData} onToggleFavorite={onToggleFavorite} />
      <NavBar />
    </div>
  );
}
