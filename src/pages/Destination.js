import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import Dest from "../components/Dest";

const Destination = () => {
  const [dataDestination, setDataDestination] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:3004/destinations")
      .then((res) => setDataDestination(res.data));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="destination">
      <Navigation />

      <div>
        <h1 className="pick">
          {" "}
          <span>01</span> Pick your destination
        </h1>
        <Dest dataDestination={dataDestination} />
      </div>
    </div>
  );
};

export default Destination;
