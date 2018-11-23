import React, { Component } from 'react';
import './App.css';
import MovieListContainer from './MovieList/MovieListContainer';
// import CssBaseline from "@material-ui/core/CssBaseline";
// import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import blueGrey from "@material-ui/core/colors/blueGrey";
// import deepOrange from "@material-ui/core/colors/deepOrange";

// const themeDark = createMuiTheme({
//   palette: {
//     type: "light",
//     primary: blueGrey,
//     secondary: deepOrange
//   },
//   typography: {
//     useNextVariants: true
//   }
// });

class App extends Component {
  render() {
    return (
          <div className="App">            
            <MovieListContainer/>
          </div>      
    );
  }
}

export default App;
