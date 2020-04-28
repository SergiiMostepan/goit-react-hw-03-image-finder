import React from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

const Searchbar = ({ value, onChange, onSubmit }) => (
  <header className={styles.Searchbar}>
    <form className={styles.SearchForm} onSubmit={onSubmit}>
      <button type="submit" className={styles.SearchFormButton}>
        <span className={styles.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        className={styles.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={value}
        onChange={onChange}
      />
    </form>
  </header>
);

Searchbar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
