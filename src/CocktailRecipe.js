import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

//const DrinkButton = styled.button`
//  fontSize: 12;
//`;

//const Test = styled(DrinkButton)`
//  color: white;
//`;
const StyledHeader = styled.h3`
  font-family: Abandoned;
  text-align: center;
  font-size: 18px;
  padding: 10px;
  font-weight: bold;
`;

const RecipeContainer = styled.div`
  width: 600px;
  background-color: white;
  transition: ${props => (props.open ? 'all 1s ease' : 'none' )};
  box-shadow: 1px 2px 4px rgba(0, 0, 0, .2);
  border-radius: 6px;
  margin-top: 50px;

`;

const StyledIngredient = styled.p`
  font-family: Roboto;
  text-align: center;
`;

const StyledInstructions = styled.p`
  font-family: Roboto;
  padding-left: 15px;
  padding-right: 10px;
  padding-bottom: 20px;

  @media (max-width: 600px) {
    padding: 0;
    padding-left: 120px;
  }
`;

const InstructionsContainer = styled.div`
  @media (max-width: 600px) {
    width: 80%;
  }
`;

export default function CocktailRecipe(props) {

  return (
    <div>
      <RecipeContainer open={props.open}>
        <div>
            <StyledHeader>Recipe for {props.selectedCocktail.strDrink}</StyledHeader>
              <div>
                <StyledIngredient>{props.selectedCocktail.strIngredient1}</StyledIngredient>
                <StyledIngredient>{props.selectedCocktail.strIngredient2}</StyledIngredient>
                <StyledIngredient>{props.selectedCocktail.strIngredient3}</StyledIngredient>
                <StyledIngredient>{props.selectedCocktail.strIngredient4}</StyledIngredient>
                <StyledIngredient>{props.selectedCocktail.strIngredient5}</StyledIngredient>
                <StyledIngredient>{props.selectedCocktail.strIngredient6}</StyledIngredient>
                <StyledIngredient>{props.selectedCocktail.strIngredient7}</StyledIngredient>
                <StyledIngredient>{props.selectedCocktail.strIngredient8}</StyledIngredient>
              </div>
            <InstructionsContainer>
              <StyledInstructions>{props.selectedCocktail.strInstructions}</StyledInstructions>
            </InstructionsContainer>
        </div>
      </RecipeContainer>
    </div>
  );
}
