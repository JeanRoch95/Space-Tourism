import React from "react";
import Navigation from "../components/Navigation";
import Explore from "../components/Explore";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="txt-home">
        <p>So, you want to travel to</p>
        <p>space</p>
        <p>
          Let's face it; if you want go to space, you might as well genuinely go
          to outer space and not hover kind of on the edge of it. Well sit back,
          and relax because we'll give you a truly of this world experience!
        </p>
      </div>
      <Explore />
    </div>
  );
};

export default Home;
