import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: '50px',
  },
}));

export default function CocktailRecipe(props) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
        open={props.open}
        onClose={props.handleClose}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Recipe for {props.selectedCocktail.strDrink}</h2>
            <p>{props.selectedCocktail.strIngredient1}</p>
            <p>{props.selectedCocktail.strIngredient2}</p>
            <p>{props.selectedCocktail.strIngredient3}</p>
            <p>{props.selectedCocktail.strIngredient4}</p>
            <p>{props.selectedCocktail.strIngredient5}</p>
            <p>{props.selectedCocktail.strIngredient6}</p>
            <p>{props.selectedCocktail.strIngredient7}</p>
            <p>{props.selectedCocktail.strIngredient8}</p>

            <p id="transition-modal-description">{props.selectedCocktail.strInstructions}</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
