import React, { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import cryptoverse from "../Images/cryptocurrency.png";
// import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import { RemoveCircleOutline } from "@material-ui/icons";

function Cryptocurrencies() {
  const [stats, setStats] = useState();
  const [coins, setCoins] = useState([]);
  // const [selectedCoin, setSelectedCoin] = useState({});
  const [allTheIds, setAllTheIds] = useState([]);
  // const [checkBookMark, setCheckBookmark] = useState(false);

  let history = useHistory();

  const getCustomersData = () => {
    axios
      .get("https://coinranking1.p.rapidapi.com/coins", {
        headers: {
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
          "X-RapidAPI-Key":
            "207bb68696msh7c2ab8791bda0adp103defjsn290b1ec659d4",
        },
      })
      .then((response) => {
        setCoins(response.data.data.coins);
        const allIds = response.data.data.coins.map((eachCoin) => {
          return eachCoin?.uuid;
        });

        setAllTheIds(allIds);

        setStats(response.data.data.stats);
        // console.log("coligvh", coins);
      })
      .catch((error) => console.log(error));
  };

  console.log("allIds ", allTheIds);

  function handleClick(coin) {
    console.log("esdfghjk", coin);
    history.push(`/coin/${coin.uuid}`);
  }

  // function addEntry(coin) {
  //   var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
  //   if (existingEntries == null) existingEntries = [];
  //   var entry = {
  //     text: coin?.uuid,
  //   };
  //   localStorage.setItem("entry", JSON.stringify(entry));
  //   existingEntries.push(entry);
  //   localStorage.setItem("allEntries", JSON.stringify(existingEntries));
  // }
  // let saved = [];
  // saved = localStorage.getItem("allEntries");
  // const obj = JSON.parse(saved);
  // const obj1 = obj?.map((data) => {
  //   return data.text;
  // });

  useEffect(() => {
    getCustomersData();
    // checkCoinThere();
  }, []);

  // function checkCoinThere(coin) {
  //   const there = obj1?.includes(coin?.uuid);
  //   return there;
  // }

  // function removeCoin(coin) {
  //   const savedValue = obj.filter((item) => item.text !== coin?.uuid);
  //   localStorage.setItem("allEntries", JSON.stringify(savedValue));
  // }

  return (
    <div className="m-2 mx-4">
      <Typography className="globalCrypto mt-3" variant="h5">
        Global Crypto Stats
      </Typography>

      <div className="d-flex">
        <div className="w-50 my-2">
          <Typography>Total Cryptocurrencies</Typography>
          <Typography>{stats?.totalCoins}</Typography>
        </div>

        <div className="w-50 my-2">
          <Typography>Total Exchanges</Typography>
          <Typography>{stats?.totalExchanges}</Typography>
        </div>

        <div></div>
      </div>

      <div className="d-flex">
        <div className="w-50 my-2">
          <Typography>Total Market Cap</Typography>
          <Typography>{stats?.totalMarketCap}</Typography>
        </div>

        <div className="w-50 my-2">
          <Typography>Total 24h Volume</Typography>
          <Typography>{stats?.total24hVolume}</Typography>
        </div>

        <div></div>
      </div>

      <div className="d-flex">
        <div className="w-50 my-2 mb-2">
          <Typography>Total Currencies</Typography>
          <Typography>{stats?.total}</Typography>
        </div>

        <div className="w-50 my-2 ">
          <Typography>Total Markets</Typography>
          <Typography>{stats?.totalMarkets}</Typography>
        </div>

        <div></div>
      </div>

      <div style={{ width: "100%", marginBottom: "20px" }}>
        <Grid className="insideGrid" container spacing={2}>
          {coins?.map((coin) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
              xl={3}
              onClick={() => {
                handleClick(coin);
              }}
            >
              <Card style={{ backgroundColor: "#d8edff" }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-between cryptoCurrencyHeader">
                    <Typography className="cryptoHeaderTop">
                      {coin?.rank}.{coin?.name}
                    </Typography>
                    <img
                      src={coin?.iconUrl}
                      alt="image1"
                      className="cryptoImageTotal"
                    />
                  </div>
                  <div className="mt-3">
                    <Typography className="cryptoNewsMiddle my-1">
                      Coin Rank : {coin?.rank}
                    </Typography>
                    <Typography className="cryptoNewsMiddle my-1">
                      Price : {coin?.price}
                    </Typography>
                    <Typography className="cryptoNewsMiddle my-2">
                      Market Cap : {coin?.marketCap}
                    </Typography>
                    <Typography className="cryptoNewsMiddle my-1">
                      Daily Change : {coin?.change}
                    </Typography>
                  </div>

                  {/* <div className="d-flex align-items-center justify-content-between my-2">
                    <Typography
                      variant="caption"
                      onClick={() => {
                        handleClick(coin);
                        setSelectedCoin(coin);
                      }}
                    >
                      view more
                    </Typography>
                    {checkCoinThere(coin) === true ? (
                      <Typography onClick={() => removeCoin(coin)}>
                        remove
                      </Typography>
                    ) : (
                      <div onClick={() => addEntry(coin)}>
                        <BookmarkBorderIcon />
                      </div>
                    )}
                  </div> */}
                </CardContent>
              </Card>
            </Grid>
          ))}

          {/* <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
            <Card style={{ backgroundColor: "#d8edff" }}>
              <CardContent>
                <div className="d-flex align-items-center justify-content-between">
                  <Typography>Card</Typography>
                  <img src={cryptoverse} alt="image" className="cryptoImage" />
                </div>

                <div className="mt-5">
                  <Typography>Price:5</Typography>
                  <Typography>Price:5</Typography>
                  <Typography>Price:5</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
            <Card style={{ backgroundColor: "#d8edff" }}>
              <CardContent>
                <div className="d-flex align-items-center justify-content-between">
                  <Typography>Card</Typography>
                  <img src={cryptoverse} alt="image" className="cryptoImage" />
                </div>

                <div className="mt-5">
                  <Typography>Price:5</Typography>
                  <Typography>Price:5</Typography>
                  <Typography>Price:5</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
            <Card style={{ backgroundColor: "#d8edff" }}>
              <CardContent>
                <div className="d-flex align-items-center justify-content-between">
                  <Typography>Card</Typography>
                  <img src={cryptoverse} alt="image" className="cryptoImage" />
                </div>

                <div className="mt-5">
                  <Typography>Price:5</Typography>
                  <Typography>Price:5</Typography>
                  <Typography>Price:5</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
            <Card style={{ backgroundColor: "#d8edff" }}>
              <CardContent>
                <div className="d-flex align-items-center justify-content-between">
                  <Typography>Card</Typography>
                  <img src={cryptoverse} alt="image1" className="cryptoImage" />
                </div>

                <div className="mt-5">
                  <Typography>Price:5</Typography>
                  <Typography>Price:5</Typography>
                  <Typography>Price:5</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid> */}
        </Grid>
      </div>
      {/* <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
          <Card style={{ backgroundColor: "red" }}>
            <CardContent>
              <div className="d-flex align-items-center justify-content-between">
                <Typography>Card</Typography>
                <img src={cryptoverse} alt="image" className="cryptoImage" />
              </div>

              <div className="mt-5">
                <Typography>Price:5</Typography>
                <Typography>Price:5</Typography>
                <Typography>Price:5</Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
          <Card style={{ backgroundColor: "red" }}>
            <CardContent>
              <div className="d-flex align-items-center justify-content-between">
                <Typography>Card</Typography>
                <img src={cryptoverse} alt="image" className="cryptoImage" />
              </div>

              <div className="mt-5">
                <Typography>Price:5</Typography>
                <Typography>Price:5</Typography>
                <Typography>Price:5</Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
          <Card style={{ backgroundColor: "red" }}>
            <CardContent>
              <div className="d-flex align-items-center justify-content-between">
                <Typography>Card</Typography>
                <img src={cryptoverse} alt="image" className="cryptoImage" />
              </div>

              <div className="mt-5">
                <Typography>Price:5</Typography>
                <Typography>Price:5</Typography>
                <Typography>Price:5</Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
          <Card style={{ backgroundColor: "red" }}>
            <CardContent>
              <div className="d-flex align-items-center justify-content-between">
                <Typography>Card</Typography>
                <img src={cryptoverse} alt="image" className="cryptoImage" />
              </div>

              <div className="mt-5">
                <Typography>Price:5</Typography>
                <Typography>Price:5</Typography>
                <Typography>Price:5</Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
          <Card style={{ backgroundColor: "red" }}>
            <CardContent>
              <div className="d-flex align-items-center justify-content-between">
                <Typography>Card</Typography>
                <img src={cryptoverse} alt="image" className="cryptoImage" />
              </div>

              <div className="mt-5">
                <Typography>Price:5</Typography>
                <Typography>Price:5</Typography>
                <Typography>Price:5</Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid> */}
    </div>
  );
}

export default Cryptocurrencies;
