import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

function Image({ src, alt, localFile, modal, imgWrapperClass, ...props }) {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const RenderImage = () =>
    localFile?.childImageSharp ? (
      <GatsbyImage image={getImage(localFile)} alt={alt} {...props} />
    ) : (
      <img src={src} alt={alt} {...props} />
    );

  return (
    <>
      <div
        onClick={handleOpen}
        style={{ cursor: modal ? 'pointer' : 'inherit' }}
        className={imgWrapperClass}
      >
        <RenderImage />
      </div>
      {modal && (
        <Modal
          open={open}
          onClose={handleClose}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'scroll',
          }}
        >
          <Fade in={open}>
            <div style={{ maxHeight: '80%', maxWidth: '90%', cursor: 'pointer' }} onClick={handleClose}>
              <RenderImage />
            </div>
          </Fade>
        </Modal>
      )}
    </>
  );
}

export default Image;
