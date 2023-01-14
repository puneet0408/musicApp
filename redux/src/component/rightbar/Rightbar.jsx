import { AiOutlineArrowDown } from "react-icons/ai";
import React from "react";
import Recommendation from "../recommendation/recommendation";
import "./rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <Recommendation type="user" />
        <Recommendation type="popular" />
        <Recommendation type="editor" />
        <button className="rightButton">
          See More
          <AiOutlineArrowDown />
        </button>
      </div>
    </div>
  );
}