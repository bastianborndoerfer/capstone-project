import { useState } from "react";
import GlobalStyle from "../styles";

const data = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    current_price: 25926.51096,
    market_cap: 504532868470,
    market_cap_rank: 1,
    fully_diluted_valuation: 544301897850,
    total_volume: 12363701657,
    high_24h: 26183,
    low_24h: 25575,
    price_change_24h: -116.93283671738754,
    price_change_percentage_24h: -0.44899,
    market_cap_change_24h: -2206061618.135803,
    market_cap_change_percentage_24h: -0.43534,
    circulating_supply: 19465650,
    total_supply: 21000000,
    max_supply: 21000000,
    ath: 69045,
    ath_change_percentage: -62.46039,
    ath_date: "2021-11-10T14:24:11.849Z",
    atl: 67.81,
    atl_change_percentage: 38123.74315,
    atl_date: "2013-07-06T00:00:00.000Z",
    roi: null,
    last_updated: "2023-08-23T11:27:16.953Z",
  },
  {
    id: "binancecoin",
    symbol: "bnb",
    name: "BNB",
    image:
      "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850",
    current_price: 214.58268,
    market_cap: 33001897148,
    market_cap_rank: 4,
    fully_diluted_valuation: 42899678886,
    total_volume: 832225023,
    high_24h: 216.38,
    low_24h: 204.21,
    price_change_24h: 5.23,
    price_change_percentage_24h: 2.49898,
    market_cap_change_24h: 831497528,
    market_cap_change_percentage_24h: 2.58467,
    circulating_supply: 153856150,
    total_supply: 153856150,
    max_supply: 200000000,
    ath: 686.31,
    ath_change_percentage: -68.74598,
    ath_date: "2021-05-10T07:24:17.097Z",
    atl: 0.0398177,
    atl_change_percentage: 538601.15445,
    atl_date: "2017-10-19T00:00:00.000Z",
    roi: null,
    last_updated: "2023-08-23T11:27:20.817Z",
  },
  {
    id: "ripple",
    symbol: "xrp",
    name: "XRP",
    image:
      "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",
    current_price: 0.51859,
    market_cap: 27408019747,
    market_cap_rank: 5,
    fully_diluted_valuation: 51867998904,
    total_volume: 1087918510,
    high_24h: 0.522798,
    low_24h: 0.50713,
    price_change_24h: 0.00102668,
    price_change_percentage_24h: 0.19837,
    market_cap_change_24h: 101281721,
    market_cap_change_percentage_24h: 0.3709,
    circulating_supply: 52841868447,
    total_supply: 99988501123,
    max_supply: 100000000000,
    ath: 3.4,
    ath_change_percentage: -84.73859,
    ath_date: "2018-01-07T00:00:00.000Z",
    atl: 0.00268621,
    atl_change_percentage: 19207.94726,
    atl_date: "2014-05-22T00:00:00.000Z",
    roi: null,
    last_updated: "2023-08-23T11:27:14.887Z",
  },
  {
    id: "cardano",
    symbol: "ada",
    name: "Cardano",
    image:
      "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860",
    current_price: 0.25949,
    market_cap: 9094761883,
    market_cap_rank: 8,
    fully_diluted_valuation: 11678243443,
    total_volume: 196082392,
    high_24h: 0.261076,
    low_24h: 0.250525,
    price_change_24h: 0.00036919,
    price_change_percentage_24h: 0.14248,
    market_cap_change_24h: 26836714,
    market_cap_change_percentage_24h: 0.29595,
    circulating_supply: 35045020830.3234,
    total_supply: 45000000000,
    max_supply: 45000000000,
    ath: 3.09,
    ath_change_percentage: -91.593,
    ath_date: "2021-09-02T06:00:10.474Z",
    atl: 0.01925275,
    atl_change_percentage: 1247.94542,
    atl_date: "2020-03-13T02:22:55.044Z",
    roi: null,
    last_updated: "2023-08-23T11:27:15.343Z",
  },
  {
    id: "dogecoin",
    symbol: "doge",
    name: "Dogecoin",
    image:
      "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256",
    current_price: 0.06326,
    market_cap: 8903965528,
    market_cap_rank: 9,
    fully_diluted_valuation: 8903968692,
    total_volume: 375142344,
    high_24h: 0.064087,
    low_24h: 0.0605,
    price_change_24h: 0.00030859,
    price_change_percentage_24h: 0.49018,
    market_cap_change_24h: 54652780,
    market_cap_change_percentage_24h: 0.61759,
    circulating_supply: 140706566383.705,
    total_supply: 140706616383.705,
    max_supply: null,
    ath: 0.731578,
    ath_change_percentage: -91.35043,
    ath_date: "2021-05-08T05:08:23.458Z",
    atl: 0.0000869,
    atl_change_percentage: 72714.31061,
    atl_date: "2015-05-06T00:00:00.000Z",
    roi: null,
    last_updated: "2023-08-23T11:27:13.429Z",
  },
  {
    id: "solana",
    symbol: "sol",
    name: "Solana",
    image:
      "https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422",
    current_price: 20.67646,
    market_cap: 8429300666,
    market_cap_rank: 10,
    fully_diluted_valuation: 11486009316,
    total_volume: 468212362,
    high_24h: 21.05,
    low_24h: 19.66,
    price_change_24h: -0.3358161032174394,
    price_change_percentage_24h: -1.59819,
    market_cap_change_24h: -116598103.78613186,
    market_cap_change_percentage_24h: -1.36437,
    circulating_supply: 407772014.702295,
    total_supply: 555641961.917297,
    max_supply: null,
    ath: 259.96,
    ath_change_percentage: -92.04254,
    ath_date: "2021-11-06T21:54:35.825Z",
    atl: 0.500801,
    atl_change_percentage: 4030.61196,
    atl_date: "2020-05-11T19:35:23.449Z",
    roi: null,
    last_updated: "2023-08-23T11:27:11.114Z",
  },
  {
    id: "polkadot",
    symbol: "dot",
    name: "Polkadot",
    image:
      "https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1639712644",
    current_price: 4.411,
    market_cap: 5585857735,
    market_cap_rank: 12,
    fully_diluted_valuation: 5942744774,
    total_volume: 112741960,
    high_24h: 4.43,
    low_24h: 4.24,
    price_change_24h: 0.01112164,
    price_change_percentage_24h: 0.25277,
    market_cap_change_24h: 20385185,
    market_cap_change_percentage_24h: 0.36628,
    circulating_supply: 1266984482.39722,
    total_supply: 1347933615.29522,
    max_supply: null,
    ath: 54.98,
    ath_change_percentage: -91.97784,
    ath_date: "2021-11-04T14:10:09.301Z",
    atl: 2.7,
    atl_change_percentage: 63.51164,
    atl_date: "2020-08-20T05:48:11.359Z",
    roi: null,
    last_updated: "2023-08-23T11:27:21.235Z",
  },
  {
    id: "shiba-inu",
    symbol: "shib",
    name: "Shiba Inu",
    image:
      "https://assets.coingecko.com/coins/images/11939/large/shiba.png?1622619446",
    current_price: 0.00001,
    market_cap: 4863894981,
    market_cap_rank: 14,
    fully_diluted_valuation: 8253102688,
    total_volume: 206632773,
    high_24h: 0.00000832,
    low_24h: 0.00000771,
    price_change_24h: 2.72934e-7,
    price_change_percentage_24h: 3.42054,
    market_cap_change_24h: 168417188,
    market_cap_change_percentage_24h: 3.5868,
    circulating_supply: 589332589485162.2,
    total_supply: 999985073203904,
    max_supply: null,
    ath: 0.00008616,
    ath_change_percentage: -90.41256,
    ath_date: "2021-10-28T03:54:55.568Z",
    atl: 5.6366e-11,
    atl_change_percentage: 14654775.91009,
    atl_date: "2020-11-28T11:26:25.838Z",
    roi: null,
    last_updated: "2023-08-23T11:27:20.014Z",
  },
];

export default function App({ Component, pageProps }) {
  const [coinsData, setcoinsData] = useState(data);
  const [coinsDataInfo, setCoinsDataInfo] = useState([]);

  function handleToggleFavorite(id) {
    const coinData = coinsDataInfo.find((coin) => coin.id === id);
    if (coinData) {
      setCoinsDataInfo(
        coinsDataInfo.map((coinInfo) =>
          coinInfo.id === id
            ? { id, isFavorite: !coinInfo.isFavorite }
            : coinInfo
        )
      );
    } else {
      setCoinsDataInfo([...coinsDataInfo, { id, isFavorite: true }]);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        coinsData={coinsData}
        coinsDataInfo={coinsDataInfo}
        onToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
