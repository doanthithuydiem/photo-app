import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

Banner.proptype = {
  title: PropTypes.string,
   backgroundUrl: PropTypes.string,
};
Banner.defaultProps = {
  title: "",
  backgroundUrl: "../../assets/images",
};

function Banner(props){
  const {title, backgroundUrl} = props;
    
  const bannerStyle = backgroundUrl
  ? { backgroundImage: `url(${backgroundUrl})` }
  : {};
    
  return (
    <section className="banner" style={bannerStyle}>
      <h1 className="baner__title">{title}</h1>
    </section>
  );
}
export default Banner;