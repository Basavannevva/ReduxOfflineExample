import React, { Component } from "react";
import Screens from "./src/Screens";
import { Provider } from 'react-redux';
import configureStore from './src/store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({ isLoading: false })),
    };
  }

  render() {
   if (this.state.isLoading) return null;
   return (
     <Provider store={this.state.store}>
       <Screens />
     </Provider>
   );
  }
}

export default App;
