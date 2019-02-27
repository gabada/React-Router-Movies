import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

    navigateHome = e => {
      e.preventDefault();
      this.props.history.push("/");
    }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink to={`/movies/${movie.id}`} activeClassName="saved-active">{movie.title}</NavLink>
        ))}
        <div onClick={this.navigateHome} className="home-button">Home</div>
      </div>
    );
  }
}
