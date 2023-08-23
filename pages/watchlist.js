import Header from "@/components/Header";
import List from "@/components/List";
import NavBar from "@/components/NavigationBar";
import Coin from "@/components/Coin";

export default function Watchlist({ isFavorite, coinsInfo, onToggleFavorite }) {
  const likedCoins = coinsInfo.filter((coin) => coin.isFavorite === true);
  return (
    <>
      <section>
        <Header />
        <h2>My Watchlist</h2>
      </section>
      <ul>
      {likedCoins?.map((coin) => (
        <li key={coin.id}>
          <Coin
            image={coin.image}
            symbol={coin.symbol}
            price={coin.current_price}
            id={coin.id}
            name={coin.name}
            onToggleFavorite={onToggleFavorite}
            isFavorite={isFavorite}
          />
        </li>
      ))}
    </ul>
      <NavBar />
    </>
  );
}
