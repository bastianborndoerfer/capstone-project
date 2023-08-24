import Header from "@/components/Header";
import List from "@/components/List";
import NavBar from "@/components/NavigationBar";

export default function HomePage({
  coinsData,
  coinsDataInfo,
  onToggleFavorite,
}) {
  return (
    <div>
      <Header />
      <List
        coinsDataInfo={coinsDataInfo}
        coinsData={coinsData}
        onToggleFavorite={onToggleFavorite}
      />
      <NavBar />
    </div>
  );
}
