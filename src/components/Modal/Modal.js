import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export default class Modal extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  backDropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillMount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    this.props.onClose();
  };

  hendleBackdropClick = e => {
    const { current } = this.backDropRef;

    if (current && e.target !== current) return;

    this.props.onClose();
  };

  render() {
    return (
      <div
        className={styles.Overlay}
        ref={this.backDropRef}
        onClick={this.hendleBackdropClick}
      >
        <img
          src={this.props.image}
          alt={this.props.tags}
          className={styles.Modal}
        />
      </div>
    );
  }
}
