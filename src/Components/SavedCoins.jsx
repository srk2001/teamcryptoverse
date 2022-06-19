import axios from "axios";
import React, { useEffect } from "react";

function SavedCoins() {
  // const [coinData, setCoinData] = useState([]);

  // const coinsData = [];

  useEffect(() => {
    let saved = [];
    saved = localStorage.getItem("allEntries");
    saved = JSON.parse(saved);
    saved = saved?.map((data) => {
      return data.text;
    });

    console.log("saved is", saved);

    for (let i = 0; i < saved.length; i++) {
      console.log("lenhgrh ", saved[i]);

      axios
        .get(`https://coinranking1.p.rapidapi.com/coin/${saved[i]}`, {
          headers: {
            "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
            "X-RapidAPI-Key":
              "207bb68696msh7c2ab8791bda0adp103defjsn290b1ec659d4",
          },
        })
        .then((response) => {
          console.log(response.data.data.coin);
          // coinsData.push(response.data.data.coin);
          // setCoinData(response.data.data.coin);
        });
    }
  }, []);

  // console.log("coins Data is", coinsData);

  return (
    <div>
      Bookmark Coin data
      <h1>Bookmarked</h1>
      {/* {coinsData?.map((eachData) => (
        <h1>{eachData?.name}</h1>
      ))} */}
    </div>
  );
}

export default SavedCoins;
