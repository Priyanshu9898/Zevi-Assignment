import React, { FC } from "react";
import { TrendCardImageType } from "../types";

const TrendCardImage: FC<TrendCardImageType> = ({ image, caption }) => {
  return (
    <>
      <div>
        <img src={image} alt="1" />
        <p>{caption}</p>
      </div>
    </>
  );
};

export default TrendCardImage;
