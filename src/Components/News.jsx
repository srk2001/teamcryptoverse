import { CardContent, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Avatar, Card } from "react-rainbow-components";
// import { useHistory } from "react-router-dom";

function News() {
  const [news, setNews] = useState([]);
  // let history = useHistory();

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

  useEffect(() => {
    getNewsData();
  }, []);

  return (
    <div className="m-2 mx-4">
      <div style={{ width: "100%", marginBottom: "20px" }}>
        <Grid className="insideGrid" container spacing={2}>
          {news.map((eachNews) => (
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
      </div>{" "}
    </div>
  );
}

export default News;
