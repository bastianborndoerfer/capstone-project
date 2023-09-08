import Holdings from "@/components/Holdings";
import NavBar from "@/components/NavigationBar";
import PortfolioValue from "@/components/PortfolioVolume";

export default function Portfolio({
  coinsData,
  positions,
  setPositions,
  onDeletePosition,
}) {

  return (
    <>
      <h2>My Portfolio</h2>
      <PortfolioValue positions={positions} />
      <Holdings
        positions={positions}
        setPositions={setPositions}
        onDeletePosition={onDeletePosition}
        coinsData={coinsData}
      />
      <NavBar />
    </>
  );
}
