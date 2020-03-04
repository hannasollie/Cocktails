import React from 'react';
import CocktailImg from './images/cocktail.jpg';
import Autocomplete from './components/Autocomplete';
import CocktailRecipe from './CocktailRecipe';
import styled from 'styled-components';


const Button = styled.button`
  margin-left: 10px;
  margin-bottom: 5px;
  background: #ff6600;
  border-radius: 8px;
  font-weight: 100;
  color: white;
  height: 30px;
  width: 48px;
  transition: all 0.3s ease 0s;
  &:hover ${Button} {
    color: #404040 !important;
    font-weight: 700 !important;
    letter-spacing: 3px;
    background: #ff5c33;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    transition: all 0.3s ease 0s;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 50px;

  @media (max-width: 600px) {
    margin-left: 0px;
  }
`;

const DrinkImg = styled.img`
  width: 250px;
  height: 270px;
  border-radius:50%;
  transition: .3s ease-in-out;
  transition: all 0.5s ease;

  @media (max-width: 600px) {
    width: 140px;
    height: 150px;
    margin-bottom: 50px;
  }

  &:hover ${DrinkImg} {
    transform: rotate(-15deg);
    opacity: 0.8;
  }
`;

export class SearchCocktails extends React.Component {
  state = {
    selectedCocktail: '',
    displayRecipe: false,
  }

  updateCocktail = event => {
    let selectedCocktail = event.target.value;
    this.setState({ selectedCocktail })
  }

  displayRecipe = () => {
    if(this.state.selectedCocktail) {
      this.setState({ displayRecipe: true });
    }
  }

  closeRecipe = () => {
    this.setState({
      displayRecipe: false,
      selectedCocktail: null
     });
  }


  render() {
    const classes = this.props;
    return (
      <React.Fragment>
        <SearchContainer>
            <DrinkImg src={CocktailImg} alt="Cocktail" aria-label="Drink-image"/>
            <SearchBar>
              <Autocomplete
                            items={this.props.cocktailList}
                            onSelected={value => this.updateCocktail({ target: { value: value ? value : null } })}
                            height={300}
                            label="What are you making?"/>
              <Button onClick={this.displayRecipe}>Go!</Button>
            </SearchBar>
        </SearchContainer>
        <SearchContainer>
        {(this.state.displayRecipe && this.state.selectedCocktail) &&
          <CocktailRecipe open={this.state.displayRecipe} handleClose={this.closeRecipe} selectedCocktail={this.state.selectedCocktail}/>
        }
        </SearchContainer>
      </React.Fragment>
    );
  }

}

export default SearchCocktails;
