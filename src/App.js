import React, { Component} from "react";
import StickyFooter from "./StickyFooter";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div>
      <div className="App">
        <p>Hannas cocktails</p>
      </div>
      <StickyFooter />
      </div>
    );
  }
}

export default App;
