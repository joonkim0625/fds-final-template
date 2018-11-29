import React, { Component } from 'react';
import LoginFormView from '../components/LoginFormView';
import { withUser } from '../contexts/UserContext';

class LoginForm extends Component {
  render() {
    // 유저에서 로그인 내려주니까! 로그인 시킬 때 서버전송 하는 거 prop
    const { login } = this.props;
    return <LoginFormView onLogin={login} />;
  }
}

export default withUser(LoginForm);
