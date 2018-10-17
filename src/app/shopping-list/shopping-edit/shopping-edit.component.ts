import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingServices } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') ingName: ElementRef;
  @ViewChild('amountInput') ingAmount: ElementRef;
  amount: Number = 0;
  ingredientName: String;
  constructor(private shoppingServices: ShoppingServices) { }
  onAddToShopping() {
    const ingTempName = this.ingName.nativeElement.value;
    const ingTempAmount = this.ingAmount.nativeElement.value;
    const newItem = new Ingredient(ingTempName, ingTempAmount);
    this.shoppingServices.onIngredientAdd(newItem);
  }

  ngOnInit() {
  }

}
