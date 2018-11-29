import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

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
      // 로그인의 성공 여부를 상태에 저장
      success: false,
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
  // 비동기함수 처리가 가능한 이유는 유저컨텍스트에서 비동기함수로 설정되었기 때문에... 완전하게 좋은 처리 방법은 아니다.
  async handleLoginButtonClick() {
    const { onLogin } = this.props;
    const { username, password } = this.state;
    await onLogin(username, password);
    // 로그인이 성공적으로 끝났을 때
    this.setState({
      success: true,
    });
    // Redirect 컴포넌트 렌더링 -> 주소표시줄의 상태가 바뀜
  }
  render() {
    const { username, password, success } = this.state;
    if (success) {
      return <Redirect to="/" />;
    }

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
