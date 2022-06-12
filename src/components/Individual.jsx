import React, { useEffect, useState } from "react";
import axios from "axios";
import placeholder from "../placeholder.png";

const Individual = ({ title, type, url, by }) => {
  const [metaData, setMetaData] = useState({});
  useEffect(() => {
    getMetaData();
  }, []);

  const getMetaData = async () => {
    const res = await axios.post(`https://my-news101.herokuapp.com/metadata`, {
      url,
    });
    setMetaData(res.data);
    console.log(res.data);
  };
  return (
    <div
      className="card"
      style={{
        width: "30%",
        height: "450px",
        minWidth: "250px",
        maxWidth: "450px",
        overflow: "hidden",
      }}
    >
      <img
        style={{ width: "100%", height: "60%" }}
        src={metaData.image || placeholder}
        alt="image"
      />
      <h3>{title}</h3>
    </div>
  );
};

export default Individual;
