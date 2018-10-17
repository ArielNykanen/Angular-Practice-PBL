import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingServices {
  ingredientsChanged = new EventEmitter<Ingredient []>();
  private  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 51)
  ];

  getAllingredients() {
    return this.ingredients.slice();
  }

  onIngredientAdd(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.getAllingredients());
  }
}
