import React from 'react';
import Header from './components/header/Header';
import PostCard from './components/postCard/PostCard';

class App extends React.Component {

  render() {
      return (
          <div>
            <Header/>
            <PostCard/>
            <PostCard/>
          </div>
    )
  }
}

export default App;