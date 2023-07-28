import React, { FC } from "react";

import { TrendPopularSuggestion, trendsImgArr } from "../constants";
import TrendCardImage from "./TrendCardImage";
import { Link } from "react-router-dom";

const TrendCard: FC = () => {
  return (
    <>
      <div className="trend-card" onClick={(event) => event.stopPropagation()}>
        <h2>Latest Trends</h2>

        <div className="image-grid">
          {trendsImgArr.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <TrendCardImage key={index} image={item.image} caption={item.caption} />
              </React.Fragment>
            );
          })}
        </div>
        <h2>Popular Suggestions</h2>
        <div className="link-grid">
          {TrendPopularSuggestion.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <Link to="" key={index}>{item}</Link>
              </React.Fragment>
            );
          })}
          
        </div>
      </div>
    </>
  );
};

export default TrendCard;
