import React from "react";
import "./TopItemsList.css";
import Shop from '../Shop/Shop'

function TopItemsList({heading}) {
  return (
    <div className="topitemslist-container">
      <div className="heading">
        <h1>{heading}</h1>
      </div>
      <div className="topitemslist-item-container">
        <Shop shopNum="1" />
        <Shop shopNum="2" />
        <Shop shopNum="3" />
        <Shop shopNum="4" />
        <Shop shopNum="5" />
        <Shop shopNum="6" />
        <Shop shopNum="7" />
        <Shop shopNum="8" />
        <Shop shopNum="9" />
        <Shop shopNum="10" />
      </div>
    </div>
  );
}

export default TopItemsList;
