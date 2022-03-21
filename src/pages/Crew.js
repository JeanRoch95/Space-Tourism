import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import Yourcrew from "../components/Yourcrew";

const Crew = () => {
  const [dataCrew, setDataCrew] = useState([]);

  const getDataCrew = () => {
    axios
      .get("http://localhost:3004/crew")
      .then((res) => setDataCrew(res.data));
  };
  useEffect(() => {
    getDataCrew();
  }, []);
  return (
    <div className="crew">
      <Navigation />

      <div>
        <h1>
          {" "}
          <span>02</span> Meet your crew
        </h1>
        <Yourcrew dataCrew={dataCrew} />
      </div>
    </div>
  );
};

export default Crew;
