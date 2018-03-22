import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import AppBar from './AppBar';
import Layout from './Layout';
import MerchBox from './merchbox/Merchbox';
import logo from './logo.svg';
import './App.css';

console.log(MerchBox);
class App extends Component {
  render() {
    return (
      <div>
        <AppBar/>
        <Layout>
          <Route path='/mvp-merch' component={MerchBox} />
        </Layout>
      </div>
    );
  }
}

export default App;
