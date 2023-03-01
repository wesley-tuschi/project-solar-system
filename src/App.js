import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';

class App extends React.Component {
  render() {
    return (
      <p>
        <Header />
        <SolarSystem />
        <Title headline="Xablau" />
      </p>
    );
  }
}

export default App;
