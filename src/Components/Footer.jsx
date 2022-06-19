import { Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

import "./Footer.css";

function Footer() {
  const history = useHistory();
  return (
    <div className="footerSection d-flex flex-column align-items-center justify-content-center py-4">
      <Typography className="my-2">
        Copyright © 2022 Nikhil Alladi. All rights Reserved
      </Typography>

      <div className="d-flex my-2 footerText">
        <div onClick={() => history.push("/")}>
          <Typography style={{ fontSize: "12px" }}>Home</Typography>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div onClick={() => history.push("/cryprocurrencies")}>
          <Typography style={{ fontSize: "12px" }}>Cryptocurrencies</Typography>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div onClick={() => history.push("/news")}>
          <Typography style={{ fontSize: "12px" }}>News</Typography>
        </div>
      </div>
    </div>
  );
}

export default Footer;
