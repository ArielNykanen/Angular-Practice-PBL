import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  @Output() recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is TEST Desc'
    , 'https://pixabay.com/get/ec32b40b2bf01c22d2524518a34d4697e27feadd1dac104496f9c77ea7eeb7b1/recipe-575434_1280.png')
,
    new Recipe('Another test recipe', 'This is TEST Desc'
    , 'https://pixabay.com/get/ec32b40b2bf01c22d2524518a34d4697e27feadd1dac104496f9c77ea7eeb7b1/recipe-575434_1280.png')
  ];
  constructor() { }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  ngOnInit() {
  }

}
