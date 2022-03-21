import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import Techno from "../components/Techno";

const Technology = () => {
  const [dataTechnology, setDataTechnology] = useState([]);

  const getTechnology = () => {
    axios
      .get("http://localhost:3004/technology")
      .then((res) => setDataTechnology(res.data));
  };
  useEffect(() => {
    getTechnology();
  }, []);

  return (
    <div className="technology">
      <Navigation />
      <Techno dataTechnology={dataTechnology} />
    </div>
  );
};

export default Technology;
