import React from 'react';
import PropTypes from 'prop-types';
import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => (
  <button className={styles.Button} type="submit" onClick={onClick}>
    <span>Load more</span>
  </button>
);

LoadMoreBtn.propTypes = { onClick: PropTypes.func.isRequired };
export default LoadMoreBtn;
