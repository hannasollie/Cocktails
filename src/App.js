import React, { Component} from "react";
import StickyFooter from "./StickyFooter";
import SearchCocktails from "./SearchCocktails";
import "./App.css";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Logo from './images/drinkLogo.png';
import CocktailHeader from './images/cocktails-header.jpg';

const styles = {

};


class App extends Component{
  render(){
    return(
      <div>
        <div className="Header">
          <div className="headerTextLogo">
            <div>
              <p>Cocktail recipes</p>
            </div>
            <div>
              <img className="drink-logo" src={Logo} alt="Logo"/>
            </div>
          </div>
        </div>
        <div>
          <img className="header-image" src={CocktailHeader} alt="Cocktail" />
        </div>
        <p style={{textAlign: 'center', fontFamily: 'Aquamarine', fontSize: '30px'}}> - Passion for cocktails - </p>
        <div>
          <SearchCocktails />
        </div>
        <StickyFooter />
      </div>
    );
  }
}

export default App;
