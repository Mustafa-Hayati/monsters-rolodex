import React from "react";
import Card from "../Card";
import "./CardList.css";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map(mon => (
        <Card key={mon.id} monster={mon} />
      ))}
    </div>
  );
};

export default CardList;
