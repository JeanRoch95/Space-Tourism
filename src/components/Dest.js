import React, { useState } from "react";

const Dest = ({ dataDestination }) => {
  const [active, setActive] = useState("Moon");

  const handleClick = (data) => setActive(data.name);

  const destination = dataDestination
    .filter((data) => data.name === active)
    .map((data) => {
      return (
        <div>
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          <hr />
          <div className="info-planete">
            <div className="distance">
              <h4>avg. distance</h4>
              <p>{data.distance}</p>
            </div>
            <div className="travel">
              <h4>est. travel time</h4>
              <p>{data.travel}</p>
            </div>
            <img src={data.images.webp} alt="planet" />
          </div>
        </div>
      );
    });

  const navDestination = dataDestination.map((data) => {
    return (
      <li
        className={data.name === active ? "active" : null}
        key={data.name}
        onClick={() => handleClick(data)}
      >
        {data.name}
      </li>
    );
  });

  return (
    <div className="dest">
      <div className="dest-nav">
        <ul>{navDestination}</ul>
      </div>
      <div className="dest-content">{destination}</div>
    </div>
  );
};

export default Dest;
