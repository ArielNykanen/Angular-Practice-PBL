import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Burger Recipe',
     'Burger Description'
    , 'https://pixabay.com/get/e837b2072af0063ed1534705fb094796e276eadd11b50c4090f3c87ea0e4b6b0dc/abstract-1238247_1920.jpg'
    , [
      new Ingredient('meat', 1),
      new Ingredient('French Fries', 20),
      new Ingredient('Cheese', 1),
      new Ingredient('Bread', 2)
      ])
,
    new Recipe(
      ' Best Pasta Recipe',
       'Pasta Description'
    , 'https://pixabay.com/get/ee3db60f2cfc1c22d9584518a34d4697e27feadd1dac104496f9c67eaee8b0bc/spaghetti-787048_1920.jpg'
    , [
      new Ingredient('Pasta Pack', 1),
      new Ingredient('meat', 1),
      new Ingredient('tomato sauce', 1),
      new Ingredient('basilicom', 1)
      ])
  ];

  getRecipe() {
    return this.recipes.slice();
  }

}
