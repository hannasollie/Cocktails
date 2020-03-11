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
  font-size: 20px;
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

  @media (max-width: 600px) {
    width: 300px;
    margin-right: 10px;
  }

`;

const StyledIngredientList = styled.div`
  border-color: #ff6600;
  border-width: 2px;
  border-style: dotted;
  width: 250px;
  margin: 0 auto;
`;

const StyledIngredientHeader = styled.h4`
  font-family: Roboto;
  text-align: center;
  font-weight: lighter;
  letter-spacing: 2px;
`;

const StyledIngredient = styled.p`
  font-family: Roboto;
  text-align: center;
  font-weight: lighter;
  letter-spacing: 1px;
`;

const StyledInstruction = styled.p`
  font-family: Roboto;
  font-weight: lighter;
  letter-spacing: 0.8px;
  font-size: 14px;
`;

const Container = styled.div`
  width: 500px;
  margin: 10px auto;
  font-family: Roboto;
  font-weight: lighter;
  letter-spacing: 0.8px;
  color: #ff6600;

  @media (max-width: 600px) {
    width: 250px;
  }
`;

const List = styled.ul`
  list-style-type: square;
  padding: 0px 20px;
  background-color: transparent;
  border-top: 0.5px solid;
  padding-bottom: 10px;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0px;
  :first-of-type {
    border-top: none;
  }
`;

const Title = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
  color: black;
`;

export default function CocktailRecipe(props) {


  const makeInstructionsList = (instructions) => {
    var sentences = instructions.split(/[.!?]/);
    return (
      <Container>
        <List>
          {sentences.filter(x => x.length > 1).map((item, i) => (
            <ListItem key={i}>
              <Title>{item}</Title>
            </ListItem>
          ))}
        </List>
      </Container>
    );
  };

  return (
    <div>
      <RecipeContainer open={props.open}>
        <div>
            <StyledHeader>Recipe for {props.selectedCocktail.strDrink}</StyledHeader>
              <StyledIngredientList>
                <StyledIngredientHeader>INGREDIENTS</StyledIngredientHeader>
                <StyledIngredient>{props.selectedCocktail.strIngredient1}</StyledIngredient>
                <StyledIngredient>{props.selectedCocktail.strIngredient2}</StyledIngredient>
                <StyledIngredient>{props.selectedCocktail.strIngredient3}</StyledIngredient>
                <StyledIngredient>{props.selectedCocktail.strIngredient4}</StyledIngredient>
                <StyledIngredient>{props.selectedCocktail.strIngredient5}</StyledIngredient>
                <StyledIngredient>{props.selectedCocktail.strIngredient6}</StyledIngredient>
                <StyledIngredient>{props.selectedCocktail.strIngredient7}</StyledIngredient>
                <StyledIngredient>{props.selectedCocktail.strIngredient8}</StyledIngredient>
              </StyledIngredientList>
              <StyledIngredientHeader>INSTRUCTIONS</StyledIngredientHeader>
              {makeInstructionsList(props.selectedCocktail.strInstructions)}
        </div>
      </RecipeContainer>
    </div>
  );
}
