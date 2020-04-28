import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import axios from 'axios';
import styles from './App.module.css';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';

export default class App extends Component {
  state = {
    images: [],
    searchField: '',
    query: '',
    page: 1,
    pixabayKey: '15899429-285d303a29400aacd77e83367',
  };

  fetchArticlies = () => {
    axios
      .get(
        `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=${this.state.pixabayKey}&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(response =>
        this.setState(state => {
          return {
            images: [...state.images, ...response.data.hits],
          };
        }),
      );
    this.setState(state => {
      return { page: state.page + 1 };
    });
  };

  hendleQueryChange = e => {
    this.setState({ query: e.target.value, searchField: e.target.value });
  };

  hendleQuerySubmit = e => {
    e.preventDefault();
    this.setState({ images: [], page: 1 });
    this.fetchArticlies();
    this.setState({ searchField: '' });
  };

  render() {
    const { searchField, images } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar
          value={searchField}
          onChange={this.hendleQueryChange}
          onSubmit={this.hendleQuerySubmit}
        />
        <ImageGallery images={images} />
        {images.length > 0 && <LoadMoreBtn onClick={this.fetchArticlies} />}
      </div>
    );
  }
}
