import React, { Component} from "react";
import StickyFooter from "./StickyFooter";
import SearchCocktails from "./SearchCocktails";
import "./App.css";
import CocktailHeader from './images/cocktails-header.jpg';
import Martini from './images/martini.svg'

class App extends Component{

  state = {
    cocktails: [],
    topDrinks: [],
  }

  componentDidMount() {
    this.getCocktailListForAutocomplete();
    this.get10RandomDrinks();
    this.getDrinkOfTheDay();

  }

  get10RandomDrinks = () => {
    fetch('https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php')
    .then(res => res.json())
    .then((data) => {
      this.setState({topDrinks: data.drinks})
    })
    .catch(console.log);
  }

  getCocktailListForAutocomplete = () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini')
    .then(res => res.json())
    .then((data) => {
      this.setState({ cocktails: data.drinks })
    })
    .catch(console.log);
  }

  getDrinkOfTheDay = () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then((data) => {
      this.setState({ pickOfTheDay: data.drinks[0] })
    })
    .catch(console.log);
  }

  render(){
    return(
      <div>
        <div className="Header">
          <div className="headerTextLogo">
            <div>
              <p>Cocktail recipes</p>
            </div>
            <div>
              <img className="drink-logo" src={Martini} alt="Logo"/>
            </div>
          </div>
        </div>
        <div>
          <img className="header-image" src={CocktailHeader} alt="Cocktail" />
        </div>
        <p style={{textAlign: 'center', fontFamily: 'Aquamarine', fontSize: '30px'}}> - Passion for cocktails - </p>
        <div>
          <SearchCocktails cocktailList={this.state.cocktails}/>
        </div>
        <StickyFooter/>
      </div>
    );
  }
}

export default App;
