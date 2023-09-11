import Holdings from "@/components/Holdings";
import NavBar from "@/components/NavigationBar";
import PortfolioValue from "@/components/PortfolioVolume";
import styled from "styled-components";

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
      {positions.length === 0 ? (
        <EmptyState>The portfolio is empty!</EmptyState>
      ) : (
      <Holdings
        positions={positions}
        setPositions={setPositions}
        onDeletePosition={onDeletePosition}
        coinsData={coinsData}
      />
      )}
      <NavBar />
    </>
  );
}

const EmptyState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-size: 1.5rem;
  color: gray;
`;