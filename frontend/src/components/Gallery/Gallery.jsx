import React from "react";
import PropTypes from "prop-types";
import GalleryV1 from "./GalleryV1";
import GalleryV2 from "./GalleryV2";

function Gallery({ title, subtitle, gallery }) {
  return gallery.length > 6 ? (
    <GalleryV2 title={title} subtitle={subtitle} gallery={gallery} />
  ) : (
    <GalleryV1 title={title} subtitle={subtitle} gallery={gallery} />
  );
}

Gallery.defaultProps = {
  title: "Галерея",
  gallery: [],
};

Gallery.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      alternativeText: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Gallery;
