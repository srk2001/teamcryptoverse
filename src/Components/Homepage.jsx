import React, { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import carousal2 from "../Images/image2.webp";
import carousal3 from "../Images/cryptocurrency.webp";
import { Carousel } from "react-bootstrap";

import Image1 from "../Images/twitter-inactive.3226e6ac.svg";
import Image2 from "../Images/linkedin-inactive.8fe546f6.svg";
import Image3 from "../Images/github-inactive.02ba6493.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "./Homepage.css";
import { Avatar } from "@mui/material";
import axios from "axios";
// import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Homepage() {
  const [coins, setCoins] = useState([]);
  const [stats, setStats] = useState();
  const [news, setNews] = useState([]);

  // const location = useLocation();
  let history = useHistory();

  // const getCustomersData = () => {
  //   axios
  //     .get("https://coinranking1.p.rapidapi.com/coins", {
  //       headers: {
  //         "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  //         "X-RapidAPI-Key":
  //           "207bb68696msh7c2ab8791bda0adp103defjsn290b1ec659d4",
  //       },
  //     })
  //     .then((response) => {
  //       setCoins(response.data.data.coins);
  //       setStats(response.data.data.stats);
  //       console.log("coligvh", coins);
  //     })
  //     .catch((error) => console.log(error));
  // };

  const getNewsData = () => {
    axios
      .get("https://bing-news-search1.p.rapidapi.com/news", {
        headers: {
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
          "X-RapidAPI-Key":
            "207bb68696msh7c2ab8791bda0adp103defjsn290b1ec659d4",
        },
      })
      .then((response) => {
        console.log("sdfghjk", response);
        setNews(response?.data?.value);
      })
      .catch((error) => console.log(error));
  };

  function handleClick(coin) {
    console.log("esdfghjk", coin);
    history.push(`/coin/${coin.uuid}`);
  }

  useEffect(() => {
    // getCustomersData();
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
        setStats(response.data.data.stats);
      })
      .catch((error) => console.log(error));
    getNewsData();
  }, []);

  return (
    <div className="m-2 mx-4">
      <div class="container d-flex align-items-center justify-content-between">
        <div></div>
        <div class="row">
          <div class="col-md-12 text-center">
            <h3 class="animate-charcter"> Cryptoverse</h3>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <img
            onClick={(event) =>
              (window.location.href = `${"https://github.com/NikhilAlladii"}`)
            }
            src={Image1}
            alt="Image1"
            style={{ marginRight: "20px" }}
          />
          <img
            onClick={(event) =>
              (window.location.href = `${"https://github.com/NikhilAlladii"}`)
            }
            src={Image2}
            alt="Image1"
            style={{ marginRight: "20px" }}
          />
          <img
            onClick={(event) =>
              (window.location.href = `${"https://github.com/NikhilAlladii"}`)
            }
            src={Image3}
            alt="Image1"
          />
        </div>
      </div>
      <h5 className="homePageText">
        A cryptocurrency, crypto-currency, crypto, or coin is a digital currency
        designed to work as a medium of exchange through a computer network that
        is not reliant on any central authority, such as a government or bank,
        to uphold or maintain it.Individual coin ownership records are stored in
        a digital ledger, which is a computerized database using strong
        cryptography to secure transaction records, to control the creation of
        additional coins, and to verify the transfer of coin ownership.Despite
        their name, cryptocurrencies are not considered to be currencies in the
        traditional sense and while varying treatments have been applied to
        them, including classification as commodities, securities, as well as
        currencies.
      </h5>

      {/* <h1 className="text-center my-3">Cryptoverse</h1> */}

      <Carousel style={{ width: "65vw" }} className="my-3 m-auto ">
        <Carousel.Item>
          <img className="d-block w-100" src={carousal3} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousal2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousal3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      <h5 className="homePageText">
        When a cryptocurrency is minted or created prior to issuance or issued
        by a single issuer, it is generally considered centralized. When
        implemented with decentralized control, each cryptocurrency works
        through distributed ledger technology, typically a blockchain, that
        serves as a public financial transaction database.[11] Traditional asset
        classes like currencies, commodities, and stocks, as well as
        macroeconomic factors, have modest exposures to cryptocurrency
        returns.[12] A cryptocurrency is a tradable digital asset or digital
        form of money, built on blockchain technology that only exists online.
        Cryptocurrencies use encryption to authenticate and protect
        transactions, hence their name. There are currently over a thousand
        different cryptocurrencies in the world.[13] Over the last few years,
        cryptocurrency prices have risen and then fallen. Crypto marketplaces do
        not guarantee that an investor is completing a purchase or trade at the
        optimal price. As a result, many investors take advantage of this by
        using arbitrage to find the difference in price across several
        markets.[14] The first decentralized cryptocurrency was Bitcoin, which
        first released as open-source software in 2009. Since the release of
        Bitcoin, many other cryptocurrencies have been created. <br />A
        cryptocurrency is an encrypted data string that denotes a unit of
        currency. It is monitored and organized by a peer-to-peer network called
        a blockchain, which also serves as a secure ledger of transactions,
        e.g., buying, selling, and transferring. Unlike physical money,
        cryptocurrencies are decentralized, which means they are not issued by
        governments or other financial institutions. Cryptocurrencies are
        created (and secured) through cryptographic algorithms that are
        maintained and confirmed in a process called mining, where a network of
        computers or specialized hardware such as application-specific
        integrated circuits (ASICs) process and validate the transactions. The
        process incentivizes the miners who run the network with the
        cryptocurrency. Bitcoin, Ether, Litecoin, and Monero are popular
        cryptocurrencies.
        <br />
      </h5>

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

      {/* ------Crypto Currency-------- */}

      <div className="my-3 d-flex align-items-center justify-content-between">
        <Typography variant="h5"> Top 10 Cryptocurrencies</Typography>
        <div onClick={() => history.push("/cryprocurrencies")}>
          <Typography variant="body2" className="showMoreText">
            Show more&nbsp;
            <ArrowForwardIcon />
          </Typography>
        </div>
      </div>

      <div style={{ width: "100%", marginBottom: "20px" }}>
        <Grid className="insideGrid" container spacing={2}>
          {coins.slice(0, 10)?.map((coin) => (
            <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
              <Card
                style={{ backgroundColor: "#d8edff" }}
                // onClick=((coin) => handleClick(coin))
                onClick={() => handleClick(coin)}
              >
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

      <h5 className="homePageText">
        In 1983, the American cryptographer David Chaum conceived an anonymous
        cryptographic electronic money called ecash.[15][16] Later, in 1995, he
        implemented it through Digicash,[17] an early form of cryptographic
        electronic payments. Digicash required user software in order to
        withdraw notes from a bank and designate specific encrypted keys before
        it can be sent to a recipient. This allowed the digital currency to be
        untraceable by the issuing bank, the government, or any third party. In
        1996, the National Security Agency published a paper entitled How to
        Make a Mint: the Cryptography of Anonymous Electronic Cash, describing a
        Cryptocurrency system, first publishing it in an MIT mailing list[18]
        and later in 1997, in The American Law Review (Vol. 46, Issue 4).[19] In
        1998, Wei Dai published a description of "b-money", characterized as an
        anonymous, distributed electronic cash system.[20] Shortly thereafter,
        Nick Szabo described bit gold.[21] Like Bitcoin and other
        cryptocurrencies that would follow it, bit gold (not to be confused with
        the later gold-based exchange, BitGold) was described as an electronic
        currency system which required users to complete a proof of work
        function with solutions being cryptographically put together and
        published. In 2009, the first decentralized cryptocurrency, Bitcoin, was
        created by presumably pseudonymous developer Satoshi Nakamoto. It used
        SHA-256, a cryptographic hash function, in its proof-of-work
        scheme.[22][23] In April 2011, Namecoin was created as an attempt at
        forming a decentralized DNS, which would make internet censorship very
        difficult. Soon after, in October 2011, Litecoin was released which used
        scrypt as its hash function instead of SHA-256. Another notable
        cryptocurrency, Peercoin, used a proof-of-work/proof-of-stake
        hybrid.[24] On 6 August 2014, the UK announced its Treasury had
        commissioned a study of cryptocurrencies, and what role, if any, they
        could play in the UK economy. The study was also to report on whether
        regulation should be considered.[25] Its final report was published in
        2018,[26] and it issued a consultation on cryptoassets and stablecoins
        in January 2021.[27] In June 2021, El Salvador became the first country
        to accept Bitcoin as legal tender, after the Legislative Assembly had
        voted 62–22 to pass a bill submitted by President Nayib Bukele
        classifying the cryptocurrency as such.[28] In August 2021, Cuba
        followed with Resolution 215 to recognize and regulate cryptocurrencies
        such as Bitcoin.[29] In September 2021, the government of China, the
        single largest market for cryptocurrency, declared all cryptocurrency
        transactions illegal, completing a crackdown on cryptocurrency that had
        previously banned the operation of intermediaries and miners within
        China.[30]
      </h5>

      {/* --------Crypto News----------- */}

      <div className="my-3 d-flex align-items-center justify-content-between">
        <Typography variant="h5"> Latest Crypto News</Typography>
        <div onClick={() => history.push("/news")}>
          <Typography variant="body2" className="showMoreText">
            Show more&nbsp;
            <ArrowForwardIcon />
          </Typography>
        </div>
      </div>

      <div style={{ width: "100%", marginBottom: "20px" }}>
        <Grid className="insideGrid" container spacing={2}>
          {news.slice(0, 10).map((eachNews) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
              xl={3}
              onClick={(event) => (window.location.href = `${eachNews.url}`)}
            >
              <Card style={{ backgroundColor: "#d8edff" }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-between">
                    <Typography className="cryptoNewsHeader">
                      {eachNews?.name.length > 30
                        ? `${eachNews.name.slice(0, 30)}...`
                        : eachNews.name}
                    </Typography>
                    <img
                      src={eachNews?.image?.thumbnail?.contentUrl}
                      alt="image1"
                      className="cryptoNews"
                    />
                  </div>

                  <div className="mt-4">
                    <Typography className="cryptoNewsMiddle">
                      {eachNews?.description.length > 30
                        ? `${eachNews.description.slice(0, 80)}...`
                        : eachNews.description}
                    </Typography>
                  </div>

                  <div className="mt-5 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <Avatar
                        alt="Remy Sharp"
                        src={
                          eachNews?.provider[0]?.image?.thumbnail?.contentUrl
                        }
                      />
                      &nbsp;&nbsp;
                      <Typography className="cryptoNewsMiddle">
                        {eachNews?.provider[0]?.name}
                      </Typography>
                    </div>
                    <div>
                      <Typography className="cryptoNewsMiddle">
                        2 hours ago
                      </Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Homepage;
