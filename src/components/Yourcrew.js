import React, { useState } from "react";

const Yourcrew = ({ dataCrew }) => {
  const [active, setActive] = useState("Douglas Hurley");

  const handleClick = (data) => setActive(data.name);

  const team = dataCrew
    .filter((data) => data.name === active)
    .map((data) => {
      return (
        <div className="team">
          <h2>{data.role}</h2>
          <h1>{data.name}</h1>
          <p>{data.bio}</p>
          <img src={data.images.webp} alt="astronaute" />
        </div>
      );
    });
  const navTeam = dataCrew.map((data) => {
    return (
      <li
        className={data.name === active ? "crew-active" : null}
        key={data.name}
        onClick={() => handleClick(data)}
      >
        {data.name}
      </li>
    );
  });
  return (
    <div className="team-member">
      <div className="nav-team-member">
        <ul>{navTeam}</ul>
      </div>
      <div className="content-team-member">{team}</div>
    </div>
  );
};

export default Yourcrew;
