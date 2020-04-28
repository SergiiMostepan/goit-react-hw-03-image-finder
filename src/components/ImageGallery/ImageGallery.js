import React, { Fragment, Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';

export default class ImageGallery extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      }),
    ).isRequired,
  };

  state = { isModalOpen: false, bigImage: '', tags: '' };

  openModal = e => {
    this.setState({
      bigImage: e.target.dataset.big,
      tags: e.target.alt,
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  listRef = createRef();

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.images !== this.props.images) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  render() {
    const { bigImage, tags } = this.state;
    // console.log(this.props.images);
    return (
      <Fragment>
        {this.state.isModalOpen && (
          <Modal image={bigImage} tags={tags} onClose={this.closeModal} />
        )}
        <ul ref={this.listRef} className={styles.ImageGallery}>
          {this.props.images.length > 0 &&
            this.props.images.map(image => (
              <ImageGalleryItem
                onOpen={this.openModal}
                key={image.id}
                image={image}
              />
            ))}
        </ul>
      </Fragment>
    );
  }
}
