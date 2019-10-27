import React, { Component } from 'react';
import './index.css';
import Header from '../../components/Header';
import PostList from '../../components/PostList'
class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <PostList />
      </>
    )
  }
}

export default Home;
