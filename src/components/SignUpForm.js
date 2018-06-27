import React from 'react';

export default class SignUpForm extends React.Component {
  static defaultProps = {
    username: '', // 아이디 입력 필드에 표시될 값
    password: '', // 암호 입력 필드에 표시될 값
    address: '',
    phone: '',
    email: '',
    onUsernameChange: username => {}, // 아이디 입력 필드에 입력이 일어날 때 호출되는 함수
    onPasswordChange: password => {}, // 암호 입력 필드에 입력이 일어날 때 호출되는 함수
    onAddressChange: address => {},
    onPhoneChange: phone => {},
    onEmailChange: email => {},
    onSubmit: () => {}, // 폼 전송이 일어날 때 호출되는 함수
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit();
  };

  render() {
    const {
      username,
      password,
      address,
      phone,
      email,
      onUsernameChange,
      onPasswordChange,
      onAddressChange,
      onPhoneChange,
      onEmailChange,
    } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <label className="label">사용자 이름</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={username}
              onChange={e => onUsernameChange(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">비밀번호</label>
          <div className="control">
            <input
              className="input"
              type="password"
              value={password}
              onChange={e => onPasswordChange(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">주소</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={address}
              onChange={e => onAddressChange(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">휴대폰 번호</label>
          <div className="control">
            <input
              className="input"
              type="tel"
              value={phone}
              onChange={e => onPhoneChange(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">이메일</label>
          <div className="control">
            <input
              className="input"
              type="email"
              value={email}
              onChange={e => onEmailChange(e.target.value)}
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">회원가입</button>
          </div>
        </div>
      </form>
    );
  }
}