import useSWR from "swr";
import moment from "moment";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Chart({ id }) {
  const { data, error, isLoading } = useSWR(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=max`,
    fetcher
  );
  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";

  const coinChartData = data.prices.map((value) => ({
    x: value[0],
    y: value[1].toFixed(2),
  }));

  const options = { responsive: true, plugins: { legend: false } };
  const chartData = {
    labels: coinChartData.map((value) => moment(value.x).format("MMMYY")),
    datasets: [
      {
        fill: true,
        data: coinChartData.map((value) => value.y),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Line options={options} data={chartData} />;
}
