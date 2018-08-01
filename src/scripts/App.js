import React from 'react';
import '../styles/App.css';
import Header from '../scripts/components/Header.js';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
      </React.Fragment>
    );
  }
}

export default App;