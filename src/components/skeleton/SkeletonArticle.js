import React from "react";
import Shimmer from "../Shimmer";
import SkeletonElement from "./SkeletonElement";

const SkeletonArticle = ({ theme }) => {
  const classes = theme || "light";
  return (
    <div
      className={`skeleton-wrapper ${classes}`}
    >
      <div className='skeleton-article'>
        <SkeletonElement type='title' />
        <SkeletonElement type='text' />
        <SkeletonElement type='text' />
        <SkeletonElement type='text' />
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonArticle;
