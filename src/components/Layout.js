import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">쇼핑몰</Link>
          <Link to="/login">로그인</Link>
        </div>
        {this.props.children}
        <div>저작권은 여러분에게 있어요!</div>
      </div>
    );
  }
}
