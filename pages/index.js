
import Header from "@/components/Header";
import List from "@/components/List";
import NavBar from "@/components/NavigationBar";

export default function HomePage({ onToggleFavorite, coinsInfo }) {
  return (
    <div>
      <Header />
      <List coinsInfo={coinsInfo} onToggleFavorite={onToggleFavorite}  />
      <NavBar />
    </div>
  );
}
