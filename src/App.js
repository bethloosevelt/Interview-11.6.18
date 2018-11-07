import React, { Component } from 'react';
import * as R from 'ramda';

import { animalTranslations, foodTranslations } from './translations';
import { CardContainer, CardHeader, CardContent } from './App.styled';

// TYPE: PropsT = {food: string, translate: (string, string) => string}
// TYPE: PropsT => ReactElement
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

// TYPE: PropsT = {animal: string, translate: (string, string) => string}
// TYPE: PropsT => ReactElement
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

// Assume Translations is the union type of Animal and Food
// translation JSON in translations.js
// for the following two type annotations
// TYPE: Translations => string => string => string => string
const translateItem = R.curry(
  (translations, language, detail, item) =>
    translations[item][detail][language]
);

// TYPE: Translations => ReactComponent => string => ReactComponent
const createTranslate = R.curry(
  (translations, Card, language, props) => (
    <Card
      translate={translateItem(translations, language)}
      {...props}
    />
  )
);

// TYPE: (ReactComponent, string) => ReactComponent
const translateAnimal = createTranslate(animalTranslations);

// TYPE: (ReactComponent, string) => ReactComponent
const translateFood = createTranslate(foodTranslations);

class App extends Component {
  constructor() {
    super();
    this.state = {language: "en"};
  }

  render() {
    // TYPE: ReactComponent
    const TranslatedAnimalCard = translateAnimal(AnimalCard, this.state.language);

    // TYPE: ReactComponent
    const TranslatedFoodCard = translateFood(FoodCard, this.state.language);

    const animals = ['tiger', 'lion', 'hippo', 'platypus'];
    const foods = ['cake', 'pizza', 'hotdog', 'pancake'];

    // TYPE: [ReactElement]
    const TranslatedAnimalCards = animals.map(a => <TranslatedAnimalCard animal={a} />);

    // TYPE: [ReactElement]
    const TranslatedFoodCards = foods.map(f => <TranslatedFoodCard food={f} />);

    // TYPE: Event => undefined
    const changeLanguage = event => this.setState({language: event.target.value});

    return (
      <div>
        <select value={this.state.language} onChange={ changeLanguage.bind(this) }>
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
