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
import { useRouter } from "next/router";

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

export default function Chart() {
  const router = useRouter();
  const { id } = router.query;

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
  console.log(coinChartData);

  const options = { responsive: true };
  const chartdata = {
    labels: coinChartData.map((value) => moment(value.x).format("MMMDD")),
    datasets: [
      {
        fill: true,
        data: coinChartData.map((value) => value.y),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={chartdata} />
    </div>
  );
}
