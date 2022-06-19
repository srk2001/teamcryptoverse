import axios from "axios";
import "./CryptoDetials.css";
import React, { useEffect, useState } from "react";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import ReactApexChart from "react-apexcharts";
import { Pagination } from "react-rainbow-components";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";

function CryptoDetials() {
  const location = useLocation();
  // let history = useHistory();
  // console.log(location.pathname.split("/"));

  const [coin, setCoin] = useState([]);
  const [coinData, setCoinData] = useState([]);
  const [timeStamp, setTimestamp] = useState([]);
  const [coinHistory, setCoinHistory] = useState([]);
  const [coinExchange, setCoinExchange] = useState([]);

  // ---------All Table Data-------

  const [high, setHigh] = useState([]);
  const [low, setLow] = useState([]);
  const [avg, setAvg] = useState([]);
  const [startDate, setStartDate] = useState([]);
  const [endDate, setEndDate] = useState([]);

  const getCoinData = (id) => {
    axios
      .get(`https://coinranking1.p.rapidapi.com/coin/${id}`, {
        headers: {
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
          "X-RapidAPI-Key":
            "207bb68696msh7c2ab8791bda0adp103defjsn290b1ec659d4",
        },
      })
      .then((response) => {
        console.log("market data", response.data.data.coin);
        setCoinData(response.data.data.coin);
        // setNews(response?.data?.value);
      })
      .catch((error) => console.log(error));
  };

  const getCoinHistoryData = (id) => {
    axios
      .get(`https://coinranking1.p.rapidapi.com/coin/${id}/history`, {
        headers: {
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
          "X-RapidAPI-Key":
            "207bb68696msh7c2ab8791bda0adp103defjsn290b1ec659d4",
        },
      })
      .then((response) => {
        const allPrices = response.data.data.history.map((price) => {
          return price?.price;
        });

        const allPricesTotal = allPrices.map((price) => {
          const particulartotal = price?.split(".");
          return particulartotal[0];
        });
        console.log("sdxfcgvhbjnkml,.", allPricesTotal);

        const allTimestamps = response.data.data.history.map((price) => {
          return price?.timestamp;
        });
        console.log("all Prices", response);

        const allTimestampsAre = allTimestamps.map((eachTimestamp) => {
          return new Date(eachTimestamp).toLocaleString();
        });

        setCoin(allPricesTotal);
        setTimestamp(allTimestampsAre);
      })
      .catch((error) => console.log(error));
  };

  const getHistoryData = (id) => {
    axios
      .get(`https://coinranking1.p.rapidapi.com/coin/${id}/ohlc`, {
        headers: {
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
          "X-RapidAPI-Key":
            "207bb68696msh7c2ab8791bda0adp103defjsn290b1ec659d4",
        },
      })
      .then((response) => {
        console.log("sdfghjk", response.data.data.ohlc);

        setCoinHistory(response.data.data.ohlc);

        const allHighs = response.data.data.ohlc.map((price) => {
          return price?.high;
        });

        const allHighsList = allHighs.map((high) => {
          return high.split(".");
        });

        const allHighsListTotal = allHighsList.map((high) => {
          return high[0];
        });

        setHigh(allHighsListTotal);

        console.log("all highs", allHighsListTotal);

        const allLows = response.data.data.ohlc.map((price) => {
          return price?.low;
        });

        const allLowsList = allLows.map((high) => {
          return high.split(".");
        });

        const allLowsListTotal = allLowsList.map((high) => {
          return high[0];
        });

        setLow(allLowsListTotal);

        console.log("all highs", allLowsListTotal);

        const allstarts = response.data.data.ohlc.map((price) => {
          return price?.startingAt;
        });

        const allStartsAre = allstarts.map((eachTimestamp) => {
          return new Date(eachTimestamp).toLocaleString();
        });

        setStartDate(allStartsAre);

        console.log("all starts", allStartsAre);

        const allends = response.data.data.ohlc.map((price) => {
          return price?.endingAt;
        });

        const allEndsAre = allends.map((eachTimestamp) => {
          return new Date(eachTimestamp).toLocaleString();
        });

        setEndDate(allEndsAre);

        console.log("all starts", allEndsAre);

        const allAvg = response.data.data.ohlc.map((price) => {
          return price?.avg;
        });

        const allAvgsList = allAvg.map((high) => {
          return high.split(".");
        });

        const allAvgListTotal = allAvgsList.map((high) => {
          return high[0];
        });

        setAvg(allAvgListTotal);

        console.log("all avgs list", allAvgListTotal);
        // setCoinHistory(response?.data?.value);
      })
      .catch((error) => console.log(error));
  };

  const getExchageData = (id) => {
    axios
      .get(`https://coinranking1.p.rapidapi.com/coin/${id}/exchanges`, {
        headers: {
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
          "X-RapidAPI-Key":
            "207bb68696msh7c2ab8791bda0adp103defjsn290b1ec659d4",
        },
      })
      .then((response) => {
        console.log("exchange data", response.data.data.exchanges);
        setCoinExchange(response.data.data.exchanges);
        // setNews(response?.data?.value);
      })
      .catch((error) => console.log(error));
  };

  const someTime = new Date(1525100400).toLocaleString();

  console.log("some time is", someTime);

  const allTableData = {
    cryptoHighPrice: high,
    cryptoLowPrice: low,
    cryptoAvgPrice: avg,
    cryptoStartingDate: startDate,
    cryptoEndDate: endDate,
  };

  console.log("all table data is", allTableData);

  useEffect(() => {
    const coinId = location.pathname.split("/");
    getCoinHistoryData(coinId[2]);
    getHistoryData(coinId[2]);
    getExchageData(coinId[2]);
    getCoinData(coinId[2]);
  }, [location.pathname]);

  const series = [
    {
      name: "Coin Price",
      data: coin,
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },

    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: timeStamp,
    },
  };

  const formateDate = (date) => {
    const newDate = new Date(date).toLocaleString();
    console.log("new date is", newDate);
    return newDate;
  };

  const [activePage, setActivePage] = useState(1);
  const lastItem = activePage * 10;
  const firstItem = lastItem - 10;
  const [activePageExchange, setACtivePageExchange] = useState(1);

  const lastItemForMarket = activePageExchange * 10;
  const firstItemForExchange = lastItemForMarket - 10;

  const handlePaginationChange = (event, page) => {
    setActivePage(page);
  };

  const handleExchangePaginationChange = (event, page) => {
    setACtivePageExchange(page);
  };

  const changePrice = (price) => {
    const particularPrice = price.split(".");
    return particularPrice[0];
  };

  return (
    <div className="cryptoDetailsTotal m-2 mx-4">
      <div>
        <div className="d-flex align-items-center justify-content-center mt-3">
          <img
            src={coinData?.iconUrl}
            alt="image1"
            className="cryptoImageTotalDetails"
          />
          <Typography variant="h3" className="coinTitle">
            {coinData.name}
          </Typography>
        </div>
        <div className="text-center">
          <Typography variant="caption">
            click here go to official website
          </Typography>
        </div>

        {/* <div>{ReactHtmlParser(coinData.description)}</div> */}

        <div
          dangerouslySetInnerHTML={{
            __html: coinData.description,
          }}
        ></div>

        <div className="m-auto w-50 text-center my-3">
          <Typography variant="h5" className="my-2">
            To know more about the {coinData?.name}:-
          </Typography>
          <table
            className="table mb-0 cryptoDetailsTable"
            style={{ border: "1px solid black" }}
          >
            {/* <thead>
              <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                  </tr>
            </thead> */}
            <tbody>
              <tr>
                <th>Rank</th>
                <td>{coinData?.rank}</td>
              </tr>
              <tr>
                <th>Symbol</th>
                <td>{coinData?.symbol}</td>
              </tr>
              <tr>
                <th>Number Of Markets</th>
                <td>{coinData?.numberOfMarkets}</td>
              </tr>
              <tr>
                <th scope="row">Number Of Exchanges</th>
                <td>{coinData?.numberOfExchanges}</td>
              </tr>
              <tr>
                <th scope="row">AllTimeHigh</th>
                <td>{coinData?.allTimeHigh?.price}</td>
              </tr>
              <tr>
                <th scope="row">MarketCap</th>
                <td>{coinData?.marketCap}</td>
              </tr>

              <tr>
                <th scope="row">Price</th>
                <td>{coinData?.price}</td>
              </tr>

              <tr>
                <th scope="row">Coin Ranking Url</th>
                <td>click here </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* --------Chart Details------ */}

      <Typography variant="h5" className="my-2">
        {coinData?.name} Price History:-
      </Typography>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />

      <Typography variant="h5" className="my-2">
        {coinData?.name} Price History Table:-
      </Typography>
      {/* --------Coin History Data--------- */}
      <table class="table table-hover" style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <th>Starting At</th>
            <th>High</th>
            <th>Average</th>
            <th>Low</th>
            <th>Ending At</th>
          </tr>
        </thead>

        {coinHistory.slice(firstItem, lastItem).map((history) => (
          <tbody>
            <tr>
              <th>
                {history.startingAt ? formateDate(history.startingAt) : null}
              </th>
              <td>{history.high ? changePrice(history.high) : null}</td>
              <td>{history.avg ? changePrice(history.avg) : null}</td>
              <td>{history.low ? changePrice(history.low) : null}</td>
              <td>{history.endingAt ? formateDate(history.endingAt) : null}</td>
            </tr>
          </tbody>
        ))}
      </table>

      <div className="d-flex align-items-center justify-content-center w-100 my-2 mb-5">
        <div className="text-center">
          <Pagination
            className="rainbow-m_auto"
            pages={3}
            activePage={activePage}
            onChange={handlePaginationChange}
          />
        </div>
      </div>
      {/* ----------Coin Exchange Data---------- */}

      <Typography variant="h5" className="my-2">
        {coinData?.name} Exchange Data Table:-
      </Typography>
      <table class="table table-hover" style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Rank</th>
            <th>Price Value</th>
            <th>Number Of Markets</th>
            {/* <th>24hVolume</th> */}
            <th>Recommended</th>
            <th>Verified</th>
          </tr>
        </thead>

        {coinExchange
          .slice(firstItemForExchange, lastItemForMarket)
          .map((exchange) => (
            <tbody>
              <tr>
                <td>{exchange.name}</td>
                <td>{exchange.rank}</td>
                <td>{exchange.price}</td>
                <td>{exchange.numberOfMarkets}</td>
                {/* <td>{exchange.24hVolume}</td> */}
                <td>
                  {exchange.recommended === true ? (
                    <DoneOutlineIcon />
                  ) : (
                    <CancelIcon />
                  )}
                </td>
                <td>
                  {exchange.verified === true ? (
                    <DoneOutlineIcon />
                  ) : (
                    <CancelIcon />
                  )}
                </td>
              </tr>
            </tbody>
          ))}
      </table>

      <div className="d-flex align-items-center justify-content-center w-100 my-2 mb-5">
        <div className="text-center">
          <Pagination
            className="rainbow-m_auto"
            pages={3}
            activePage={activePageExchange}
            onChange={handleExchangePaginationChange}
          />
        </div>
      </div>
    </div>
  );
}

export default CryptoDetials;
