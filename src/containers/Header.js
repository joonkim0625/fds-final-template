import React from 'react';
import HeaderView from '../components/HeaderView';
import { withUser, UserConsumer } from '../contexts/UserContext';

// provider를 사용하기 위해 consumer를 사용!

export default function Header(props) {
  return (
    <UserConsumer>
      {value => <HeaderView key={value.username} {...value} />}
    </UserConsumer>
  );
}
