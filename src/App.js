import React, { Component } from 'react';
import * as R from 'ramda';

import { animalTranslations, foodTranslations } from './translations';
import { CardContainer, CardHeader, CardContent } from './App.styled';

const FoodCard = ({
  food,
  translate,
}) => (
  <CardContainer>
    <CardHeader>{translate('name', food)}</CardHeader>
    <CardContent>{translate('meal', food)}</CardContent>
    <CardContent>{translate('description', food)}</CardContent>
  </CardContainer>
);

const AnimalCard = ({
  animal,
  translate,
}) => (
  <CardContainer>
    <CardHeader>{translate('species', animal)}</CardHeader>
    <CardContent>Biome: {translate('biome', animal)}</CardContent>
    <CardContent>Color: {translate('color', animal)}</CardContent>
  </CardContainer>
);

// FIXME: Add your code here
const createTranslate = ...

const translateAnimal = createTranslate(animalTranslations);
const translateFood = createTranslate(foodTranslations);

class App extends Component {
  constructor() {
    super();
  }

  render() {
    const TranslatedAnimalCard = translateAnimal(AnimalCard, this.state.language);
    const TranslatedFoodCard = translateFood(FoodCard, this.state.language);

    const animals = ['tiger', 'lion', 'hippo', 'platypus'];
    const foods = ['cake', 'pizza', 'hotdog', 'pancake'];

    const TranslatedAnimalCards = animals.map(a => <TranslatedAnimalCard animal={a} />);
    const TranslatedFoodCards = foods.map(f => <TranslatedFoodCard food={f} />);

    return (
      <div>
        <select value={this.state.language} onChange={/* FIXME: add your code here */}>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="ru">русский</option>
          <option value="fi">Suomalainen</option>
        </select>
        <div style={{ display: 'flex' }}>
          {TranslatedAnimalCards}
        </div>
        <div style={{ display: 'flex' }}>
          {TranslatedFoodCards}
        </div>
      </div>
    );
  }
}

export default App;
