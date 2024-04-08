import React from "react";
import Card from "../components/DeptCard";

import { useParams } from "react-router-dom";

import "../styles/coreTeamDept.css";
import data from "../data/CoreDept.json";
import Navbar from "../components/Navbar";

const CoreTeamDept = () => {
  const { dept } = useParams();

  let dataArr = [];

  switch (dept) {
    case "media":
      dataArr = data.media;
      break;

    case "artAndDesign":
      dataArr = data.artAndDesign;
      break;

    case "developer":
      dataArr = data.developer;
      break;

    case "Coding":
      dataArr = data.Coding;
      break;

    case "Cultural":
      dataArr = data.Cultural;
      break;

    case "ESummit":
      dataArr = data.ESummit;
      break;

    case "Content":
      dataArr = data.Content;
      break;

    case "Robotics":
      dataArr = data.Robotics;
      break;

    case "management":
      dataArr = data.management;
      break;

    case "pr":
      dataArr = data.PR;
      break;

    case "Sports":
      dataArr = data.sports;
      break;

    default:
      break;
  }

  console.log(dataArr);

  return (
    <>
      <Navbar />
      <div className="card-container">
        {dataArr.map((data) => {
          return (
            <Card
              photo={data.image}
              name={data.name}
              designation={data.designation}
            />
          );
        })}
      </div>
    </>
  );
};

export default CoreTeamDept;
