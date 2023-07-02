import React from 'react';

import constants from '../../config/constants';
import SliderGallery from './variants/gallery-slider/gallery-slider';
import GalleryV1 from './variants/gallery-v1/gallery-v1';
import GalleryV2 from './variants/gallery-v2/gallery-v2';

const { galleryType } = constants;

function Gallery({ variant = galleryType.default, gallery = [], ...props }) {
  if (variant === galleryType.default) {
    return gallery?.length > 6 ? (
      <GalleryV2 gallery={gallery} {...props} />
    ) : (
      <GalleryV1 gallery={gallery} {...props} />
    );
  } else {
    return <SliderGallery gallery={gallery} {...props} />;
  }
}

export default Gallery;
