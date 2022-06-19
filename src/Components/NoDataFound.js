import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function NoDataFound() {
  const history = useHistory();

  useEffect(() => {
    history.push("/");
  });
  return <div className="">NoDataFound</div>;
}

export default NoDataFound;
