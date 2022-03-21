import React, { useState } from "react";

const Techno = ({ dataTechnology }) => {
  const [activeTechno, setActiveTechno] = useState("A");

  const handleClick = (data) => setActiveTechno(data.id);

  const techno = dataTechnology
    .filter((data) => data.id === activeTechno)
    .map((data) => {
      return (
        <div>
          <p>The terminology...</p>
          <h1>{data.name}</h1>
          <p className="description">{data.description}</p>
          <img src={data.images.portrait} alt="astronaute" />
        </div>
      );
    });

  const technoNav = dataTechnology.map((data) => {
    return (
      <li
        key={data.name}
        className={data.id === activeTechno ? "active-techno" : null}
        onClick={() => handleClick(data)}
      >
        {data.id}
      </li>
    );
  });

  return (
    <div className="composent-technology">
      <div className="techno-navigation">{technoNav}</div>
      <div className="techno">{techno}</div>
    </div>
  );
};

export default Techno;
