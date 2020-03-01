import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import CocktailImg from './images/cocktail.jpg';
import "./App.css";
import Autocomplete from './components/Autocomplete';


const mockList = [
  {
    id: 1,
    name: 'Espresso Martini'
  },
  {
    id: 2,
    name: 'Bloody Mary'
  },
];

const styles = theme => ({
    root: {
      fontSize: '16px',
    },
    searchContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
});

export class SearchCocktails extends React.Component {
  state = {
    selectedCocktail: '',
  }

  updateCocktail = event => {
    let cocktail = event.target.value;
    this.setState({ cocktail })
  }

  render() {
    const classes = this.props;
    return (
      <div className={classes.root}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div>
              <img className="image-size" src={CocktailImg} alt="Cocktail" />
            </div>
            <div style={{ marginLeft: '50px'}}>
              <Autocomplete
                            items={mockList}
                            onSelected={value => this.updateCocktail({ target: { value: value ? value.id : null } })}
                            height={300}
                            label="Search for recipes"/>
           </div>
        </div>
      </div>
    );
  }

}

export default withStyles(styles)(SearchCocktails);
