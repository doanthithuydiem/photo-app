import React from "react";
import { useResolvedPath } from "react-router-dom";

Card.propTypes = {};

function Card(props) {
  const match = useResolvedPath("").pathname;

  return <div> cart page</div>;
}

export default Card;