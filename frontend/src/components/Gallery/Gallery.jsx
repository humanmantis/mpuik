import React from "react";
import PropTypes from "prop-types";
import GalleryV1 from "./GalleryV1";
import GalleryV2 from "./GalleryV2";
import SliderGallery from "./SliderGallery";
import constants from "../../config/constants";

function Gallery({ title, subtitle, type, gallery }) {
  const { galleryType } = constants;

  if (type === galleryType.default) {
    return gallery.length > 6 ? (
      <GalleryV2 title={title} subtitle={subtitle} gallery={gallery} />
    ) : (
      <GalleryV1 title={title} subtitle={subtitle} gallery={gallery} />
    );
  } else {
    return (
      <SliderGallery title={title} subtitle={subtitle} gallery={gallery} />
    );
  }
}

Gallery.defaultProps = {
  gallery: [],
};

Gallery.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  type: PropTypes.string.isRequired,
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      attributes: PropTypes.shape({
        hash: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        alternativeText: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
};

export default Gallery;
