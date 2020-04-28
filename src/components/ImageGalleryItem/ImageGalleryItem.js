import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ onOpen, image }) => (
  <li className={styles.ImageGalleryItem}>
    <img
      onClick={onOpen}
      src={image.webformatURL}
      alt={image.tags}
      className={styles.ImageGalleryItemImage}
      data-big={image.largeImageURL}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  onOpen: PropTypes.func.isRequired,
  // image: PropTypes.object.isRequired,
  image: PropTypes.objectOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      // id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default ImageGalleryItem;
