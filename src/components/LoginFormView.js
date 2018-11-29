import React, { Component } from 'react';

// 1. 제어되는 함수로 만들기
// 2. 로그인 버튼 눌렀을 때 onLogin 함수 작동
export default class LoginFormView extends Component {
  static defaultProps = {
    onLoginButton: () => {},
  };
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value,
    });
  }
  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }
  // 아니면 위의 두개 합치면
  // handleFieldChange(e, name) {
  //   this.setState({
  //     [name]: e.target.value,
  //   });
  // }

  // LoginForm.js에서 받은 prop을 받아와서 실행시킬 수 있게 하는 함수...
  handleLoginButtonClick() {
    const { onLogin } = this.props;
    const { username, password } = this.state;
    onLogin(username, password);
  }
  render() {
    const { username, password } = this.state;

    return (
      <div>
        <input
          type="text"
          value={username}
          onChange={e => this.handleUsernameChange(e)}
        />
        <input
          type="password"
          value={password}
          onChange={e => this.handlePasswordChange(e)}
        />
        <button onClick={() => this.handleLoginButtonClick()}>로그인</button>
      </div>
    );
  }
}
