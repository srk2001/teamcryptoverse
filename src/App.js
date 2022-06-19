import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Cryptocurrencies from "./Components/Cryptocurrencies";
import Exchanges from "./Components/Exchanges";
import Footer from "./Components/Footer";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CryptoDetials from "./Components/CryptoDetials";
import { BrowserRouter } from "react-router-dom";
import SavedCoins from "./Components/SavedCoins";
import NoDataFound from "./Components/NoDataFound";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* ---------------Navbar------------- */}
        <div className="d-flex">
          <div>
            <Navbar />
          </div>
          <div
            style={{ width: "100%", position: "relative" }}
            className="totalBody"
          >
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route path="/cryprocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route path="/exchanges">
                <Exchanges />
              </Route>
              <Route path="/coin/:coinId">
                <CryptoDetials />
              </Route>
              <Route path="/news">
                <News />
              </Route>
              <Route path="/savedcoins">
                <SavedCoins />
              </Route>

              <Route path="*">
                <NoDataFound />
              </Route>
            </Switch>
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
