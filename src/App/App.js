import React, { Component } from 'react';
import './App.css';
import AppContainer from './AppContainer';
import FavListProvider from './FavListProvider';

class App extends Component {

  render() {
    return (
          <div className="App">  
            <FavListProvider>
              <AppContainer />                         
            </FavListProvider>
          </div>      
    );
  }
}

export default App;
