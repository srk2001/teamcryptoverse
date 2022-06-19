import React from "react";
import cryptoverse from "../Images/cryptocurrency.png";
import "./Navbar.css";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { Typography } from "@mui/material";

function Navbar() {
  const location = useLocation();
  let history = useHistory();
  console.log(location.pathname);

  function handleClick() {
    history.push("/");
  }

  function handleClickCryprocurrencies() {
    history.push("/cryprocurrencies");
  }

  // function handleClickCryproExchanges() {
  //   history.push("/exchanges");
  // }

  function handleClickCryproNews() {
    history.push("/news");
  }

  return (
    <div className="navbarContainer">
      <div className="d-flex align-items-center justify-content-center p-3 ">
        <div className="cryptoverseImage">
          <img src={cryptoverse} alt="image1" className="cryptoImage" />
        </div>
        {/* <h1 className="title">Cryproverse</h1> */}
      </div>

      <div className="navbarItems">
        <ul>
          <li onClick={handleClick}>
            <div className="d-flex">
              <div
                className="eachNavItem d-flex flex-column align-items-center justify-content-center"
                style={{
                  backgroundColor: location.pathname === "/" ? "#f6f7f9" : null,
                  borderRadius: location.pathname === "/" ? "10px" : null,
                }}
              >
                <HomeIcon style={{ width: "4vw", height: "4vh" }} />
                <Typography variant="caption" className="navLinks">
                  Home
                </Typography>
              </div>
              <div
                className="eachNavItemBorder"
                style={{
                  display: location.pathname === "/" ? "block" : "none",
                }}
              ></div>
            </div>
          </li>
          <li onClick={handleClickCryprocurrencies}>
            <div className="d-flex">
              <div
                className="eachNavItem d-flex flex-column align-items-center justify-content-center"
                style={{
                  backgroundColor:
                    location.pathname === "/cryprocurrencies"
                      ? "#f6f7f9"
                      : null,
                  borderRadius:
                    location.pathname === "/cryprocurrencies" ? "10px" : null,
                }}
              >
                <MonetizationOnIcon style={{ width: "4vw", height: "4vh" }} />
                <Typography variant="caption" className="navLinks">
                  Crypto
                </Typography>
                <Typography variant="caption" className="navLinks">
                  currencies
                </Typography>
              </div>
              <div
                className="eachNavItemBorder"
                style={{
                  display:
                    location.pathname === "/cryprocurrencies"
                      ? "block"
                      : "none",
                }}
              ></div>
            </div>
          </li>
          {/* <li onClick={handleClickCryproExchanges}>
            <div className="d-flex">
              <div
                className="eachNavItem d-flex flex-column align-items-center justify-content-center"
                style={{
                  backgroundColor:
                    location.pathname === "/exchanges" ? "#f6f7f9" : null,
                  borderRadius:
                    location.pathname === "/exchanges" ? "10px" : null,
                }}
              >
                <MonetizationOnIcon style={{ width: "4vw", height: "4vh" }} />
                <Typography variant="caption" className="navLinks">
                  Exchanges
                </Typography>
              </div>
              <div
                className="eachNavItemBorder"
                style={{
                  display:
                    location.pathname === "/exchanges" ? "block" : "none",
                }}
              ></div>
            </div>
          </li> */}
          <li onClick={handleClickCryproNews}>
            <div className="d-flex">
              <div
                className="eachNavItem d-flex flex-column align-items-center justify-content-center"
                style={{
                  backgroundColor:
                    location.pathname === "/news" ? "#f6f7f9" : null,
                  borderRadius: location.pathname === "/news" ? "10px" : null,
                }}
              >
                <MonetizationOnIcon style={{ width: "4vw", height: "4vh" }} />
                <Typography variant="caption" className="navLinks">
                  News
                </Typography>
              </div>
              <div
                className="eachNavItemBorder"
                style={{
                  display: location.pathname === "/news" ? "block" : "none",
                }}
              ></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
