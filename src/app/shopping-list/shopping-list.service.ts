import { EventEmitter, OnChanges } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingServices implements OnChanges {
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
  onIngSentToShoppingList(ingsToSl: Ingredient[]) {
      this.ingredients.push(...ingsToSl);
    this.ingredientsChanged.emit(this.getAllingredients());
  }


  ngOnChanges() {
  }
}
