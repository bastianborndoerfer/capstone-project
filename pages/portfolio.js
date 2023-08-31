
import HeaderPages from "@/components/HeaderPages";
import Holdings from "@/components/Holdings";
import NavBar from "@/components/NavigationBar";
import PortfolioValue from "@/components/PortfolioVolume";

export default function Portfolio({ positions, setPositions, onDeletePosition }) {
  return (
    <>
      <HeaderPages />
      <h2>My Portfolio</h2>
      <PortfolioValue />
      <Holdings positions={positions} setPositions={setPositions} onDeletePosition={onDeletePosition} />

      <NavBar />
    </>
  );
}
