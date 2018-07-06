import React from 'react';

import superAPI from '../superAPI';

const { Provider, Consumer } = React.createContext({
  login: (username, password) => {}, // 로그인 함수
  signup: (username, password, address, phone, email) => {},
});

class AuthProvider extends React.Component {
  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.fetchMe();
    }
  }

  state = {
    loading: 0,
    id: null,
    username: null,
    address: null,
    phone: null,
    mail: null,
    admin: false,
  };

  async fetchMe() {
    this.setState(prevState => ({
      loading: prevState.loading + 1,
    }));
    try {
      const res = await superAPI.get('/me');
      if (res.data.id === 1) {
        this.setState({
          id: res.data.id,
          username: res.data.username,
          admin: true,
        });
      } else {
        this.setState({
          id: res.data.id,
          username: res.data.username,
        });
      }
    } finally {
      this.setState(prevState => ({
        loading: prevState.loading - 1,
      }));
    }
  }

  login = async (username, password) => {
    this.setState(prevState => ({
      loading: prevState.loading + 1,
    }));
    try {
      const res = await superAPI.post('/users/login', {
        username,
        password,
      });
      localStorage.setItem('token', res.data.token);
      await this.fetchMe();
    } finally {
      this.setState(prevState => ({
        loading: prevState.loading - 1,
      }));
    }
  };

  logout = () => {
    localStorage.removeItem('token');
    this.setState({
      id: null,
      username: null,
      admin: false,
    });
  };

  signup = async (username, password, address, phone, email) => {
    this.setState(prevState => ({
      loading: prevState.loading + 1,
    }));
    try {
      const res = await superAPI.post('/users/register', {
        username,
        password,
      });
      localStorage.setItem('token', res.data.token);
      const meRes = await superAPI.get('/me');
      const meId = meRes.data.id;
      const addInfoRes = await superAPI.patch(`/users/${meId}`, {
        address,
        phone,
        email,
      });
      localStorage.removeItem('token');
      // await this.fetchMe();
    } finally {
      this.setState(prevState => ({
        loading: prevState.loading - 1,
      }));
    }
  };

  render() {
    const value = {
      login: this.login,
      logout: this.logout,
      signup: this.signup,
      id: this.state.id,
      username: this.state.username,
      address: this.state.address,
      phone: this.state.phone,
      email: this.state.email,
      admin: this.state.admin,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { AuthProvider, Consumer as AuthConsumer };
