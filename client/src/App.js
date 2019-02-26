import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    if (savedList.findIndex((m) => {
      return m.id === movie.id;
      }) > -1 ) {
    } else {
      savedList.push(movie);
      this.setState({ savedList });
    }
  };

  render() {
    return (
      <div>
        <Route path="/" render={props => <SavedList list={this.state.savedList} {...props} /> } />
    <Route exact path="/" render={props => <MovieList  addToSavedList={this.addToSavedList} /> } />
        <Route path="/movies/:id" render={(props) => <Movie {...props} addToSavedList={this.addToSavedList} /> } />
      </div>
    );
  }
}
