import ListItem from "../ListItem";

export default function List({ coins }) {
  return (
    <div>
      <ul>
        {coins.map((coin) => (
          <li key={coin.id}>
            <ListItem
              image={coin.image}
              symbol={coin.symbol}
              price={coin.current_price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
