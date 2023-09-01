import HeaderPages from "@/components/HeaderPages";
import Holdings from "@/components/Holdings";
import NavBar from "@/components/NavigationBar";
import PortfolioValue from "@/components/PortfolioVolume";

export default function Portfolio({
  coinsData,
  positions,
  setPositions,
  onDeletePosition,
  name
}) {


  return (
    <>
      <HeaderPages />
      <h2>My Portfolio</h2>
      <PortfolioValue positions={positions} />
      <Holdings
        positions={positions}
        setPositions={setPositions}
        onDeletePosition={onDeletePosition}
        coinsData={coinsData}
        name={name}
      />

      <NavBar />
    </>
  );
}
