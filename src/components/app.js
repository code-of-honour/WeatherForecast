import React from 'react';
import { Component } from 'react';

import WeatherList from '../containers/weatherList'
import SearchBar from '../containers/searchBar'

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
