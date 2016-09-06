import React, { Component } from 'react';
import Header from './header';
import Home from './home';

export default class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Home />
      {this.props.children}
      </div>
    );
  }
}
