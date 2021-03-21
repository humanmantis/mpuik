import React from "react";
import PropTypes from "prop-types";
import CardSmall from "./CardSmall";
import CardMiddle from "./CardMiddle";
import CardBig from "./CardBig";

function Card({ variant, title, description, icon }) {
  switch (variant) {
    case "small":
      return <CardSmall title={title} description={description} icon={icon} />;
    case "middle":
      return <CardMiddle title={title} description={description} icon={icon} />;
    case "big":
      return <CardBig title={title} description={description} icon={icon} />;
    default:
      return <CardMiddle title={title} description={description} icon={icon} />;
  }
}

Card.defaultProps = {
  variant: "middle",
  description: "",
};

Card.propTypes = {
  variant: PropTypes.oneOf(["small", "middle", "big"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  icon: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alternativeText: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
