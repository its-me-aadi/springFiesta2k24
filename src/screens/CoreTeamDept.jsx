import React from "react";
import Card from "../components/DeptCard";

import { useParams } from "react-router-dom";

import "../styles/coreTeamDept.css";
import data from "../data/CoreDept.json";
import Navbar from "../components/Navbar";

const CoreTeamDept = () => {
  const { dept } = useParams();

  let dataArr = [];
  let title;
  switch (dept) {
    case "media":
      dataArr = data.media;
      title = "Media team";
      break;

    case "artAndDesign":
      dataArr = data.artAndDesign;
      title = "Abstract team";
      break;

    case "developer":
      dataArr = data.developer;
      title = "Website Developers";
      break;

    case "Coding":
      dataArr = data.Coding;
      title = "Coding Team";
      break;

    case "Cultural":
      dataArr = data.Cultural;
      title = "Cultural Team";
      break;

    case "ESummit":
      dataArr = data.ESummit;
      title = "E-Cell Team";
      break;

    case "Content":
      dataArr = data.Content;
      title = "Content Team";
      break;

    case "Robotics":
      dataArr = data.Robotics;
      title = "Management Team";
      break;

    case "management":
      dataArr = data.management;
      title = "Management Team";
      break;

    case "pr":
      dataArr = data.PR;
      title = "PR and Outreach Team";
      break;

    case "Sports":
      dataArr = data.sports;
      title = "Sports Team";
      break;

    default:
      break;
  }

  console.log(dataArr);

  return (
    <>
      <Navbar /> 
      <h1>{title}</h1>
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
