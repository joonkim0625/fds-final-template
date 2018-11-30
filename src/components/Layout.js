import React, { Component } from 'react';
import Header from '../containers/Header';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <div>저작권은 여러분에게 있어요!</div>
      </div>
    );
  }
}
