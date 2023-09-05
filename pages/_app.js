import GlobalStyle from "../styles";
import data from "../lib/data";
import useLocalStorageState from "use-local-storage-state";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

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
          const isFavorite = !selectedCoin.isFavorite;
          const toastMessage = isFavorite ? "added to WL!" : "removed from WL!";
          toast.info(toastMessage);
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
    toast.success("Position added!");
  }

  // delete a position
  function handleDeletePosition(deletePosition) {
    const remainingPositions = positions.filter(
      (position) => position.id !== deletePosition.id
    );
    setPositions(remainingPositions);
    toast.error("Position deleted!");
  }

  return (
    <>
      <GlobalStyle />
      <ToastContainer />
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
