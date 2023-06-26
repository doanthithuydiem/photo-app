import React from "react";
import { useResolvedPath } from "react-router-dom";

Home.propTypes = {};

function Home(props) {
  const match = useResolvedPath("").pathname;

  return <div>Home page</div>;
}

export default Home;