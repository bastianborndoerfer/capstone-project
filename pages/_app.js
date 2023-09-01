import GlobalStyle from "../styles";
import data from "../lib/data";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [coinsData, setCoinsData] = useLocalStorageState("favorites", {
    defaultValue: data,
  });
  const [positions, setPositions] = useLocalStorageState("positions", {
    defaultValue: [],
  });

  function handleToggleFavorite(id) {
    const selectedCoin = coinsData.find((coin) => coin.id === id);

    if (selectedCoin) {
      const updatedCoinsData = coinsData.map((coinData) => {
        if (coinData.id === id) {
          return {
            ...coinData,
            isFavorite: !selectedCoin.isFavorite,
          };
        }
        return coinData;
      });
      setCoinsData(updatedCoinsData);
    }
  }
  // add position to portfolio
  function handleAddPosition(newPosition) {
    setPositions([...positions, newPosition]);
  }

  // delete a position
  function handleDeletePosition(deletePosition){
    const remainingPositions = positions.filter((position) => position.id !== deletePosition.id);
     setPositions(remainingPositions);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        coinsData={coinsData}
        onToggleFavorite={handleToggleFavorite}
        positions={positions}
        onAddPosition={handleAddPosition}
        onDeletePosition={handleDeletePosition}
        data={data}
      />
    </>
  );
}
