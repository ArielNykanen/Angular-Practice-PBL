import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is TEST Desc'
    , 'https://pixabay.com/get/ec32b40b2bf01c22d2524518a34d4697e27feadd1dac104496f9c77ea7eeb7b1/recipe-575434_1280.png')
,
    new Recipe('Another test recipe', 'This is TEST Desc'
    , 'https://pixabay.com/get/ec32b40b2bf01c22d2524518a34d4697e27feadd1dac104496f9c77ea7eeb7b1/recipe-575434_1280.png')
  ];

  getRecipe() {
    return this.recipes.slice();
  }

}
