import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import TopPage from './pages/TopPage';
import CoatPage from './pages/CoatPage';
import BottomPage from './pages/BottomPage';
import ShoesPage from './pages/ShoesPage';
import BagPage from './pages/BagPage';

import SignupPage from './pages/SignUpPage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import AdminMainPage from './pages/AdminMainPage';
import { AuthProvider } from './contexts/AuthContext';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AuthProvider>
          <Switch>
            <Route path="/login" component={LoginControl} />
            <Route path="/signup" component={SignUpControl} />
            <Route path="/main" component={MainPage} />
            <Route path="/top" component={TopPage} />
            <Route path="/coat" component={CoatPage} />
            <Route path="/bottom" component={BottomPage} />
            <Route path="/shoes" component={ShoesPage} />
            <Route path="/bag" component={BagPage} />
            <Route path="/cart" component={CartControl} />
            <Route path="/order" component={OrderControl} />
            <Route path="/orderhistory" component={OrderHistoryControl} />
            <Route path="/admin" component={AdminMainPage} />
            <Route
              exact
              path="/"
              render={() =>
                localStorage.getItem('token') ? (
                  <Redirect to="/main" />
                ) : (
                  <Redirect to="/main" />
                )
              }
            />
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    );
  }
}

const LoginControl = () =>
  localStorage.getItem('token') ? <Redirect to="/main" /> : <LoginPage />;

const SignUpControl = () =>
  localStorage.getItem('token') ? <Redirect to="/main" /> : <SignupPage />;

const CartControl = () =>
  localStorage.getItem('token') ? <CartPage /> : <Redirect to="/main" />;

const OrderHistoryControl = () =>
  localStorage.getItem('token') ? (
    <OrderHistoryPage />
  ) : (
    <Redirect to="/main" />
  );

const OrderControl = () =>
  localStorage.getItem('token') ? <OrderPage /> : <Redirect to="/main" />;

export default App;
