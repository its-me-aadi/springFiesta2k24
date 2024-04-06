import React from "react";
import Card from "../components/DeptCard";

import { useParams } from "react-router-dom";

import "../styles/coreTeamDept.css";
import data from "../data/CoreDept.json";

const CoreTeamDept = () => {
  const { dept } = useParams();

  let dataArr = [];

  switch (dept) {

    case "media":
      dataArr = data.media;
      break;

    case "coding":
      dataArr = data.media;
      break;

    case "content":
      dataArr = data.media;
      break;

    case "cultural":
      dataArr = data.media;
      break;

    case "developers":
      dataArr = data.media;
      break;

    case "Ecell":
      dataArr = data.media;
      break;

    case "mgmt":
      dataArr = data.media;
      break;

    case "PR":
      dataArr = data.media;
      break;
	  
    case "Sports":
      dataArr = data.media;
      break;

    default:
      break;
  }

  console.log(dataArr);

  return (
    <div className="card-container">
      {dataArr.map((data) => {
        return <Card />;
      })}
    </div>
  );
};

export default CoreTeamDept;
