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

  const coinChartData = data.prices.reduce((acc, value) => {
    const date = moment(value[0]);
    const monthYear = date.format("MMMYY");

    if (!acc[monthYear]) {
      acc[monthYear] = {
        x: date.startOf("month").valueOf(),
        y: value[1].toFixed(2),
      };
    }

    return acc;
  }, {});

  const options = { responsive: true, plugins: { legend: false }, elements: {
    line: {
      borderWidth: 0.2, // Hier können Sie die Borderstärke anpassen
    },
  },
  scales: {
    x: {
      grid: {
        display: false, 
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        precision: 6,
      }
    },
  },
};
const chartData = {
  labels: Object.keys(coinChartData),
  datasets: [
    {
      fill: true,
      data: Object.values(coinChartData),
      borderColor: "#656c6a",
      backgroundColor: "#e4e3e2",
      pointRadius: 0,
    },
  ],
};

  return <Line options={options} data={chartData} />;
}
