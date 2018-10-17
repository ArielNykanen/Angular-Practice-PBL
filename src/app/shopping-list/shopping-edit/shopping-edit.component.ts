import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() newShoppingItem = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') ingName: ElementRef;
  @ViewChild('amountInput') ingAmount: ElementRef;
  amount: Number = 0;
  ingredientName: String;
  onAddToShopping() {
    const ingTempName = this.ingName.nativeElement.value;
    const ingTempAmount = this.ingAmount.nativeElement.value;
    const newItem = new Ingredient(ingTempName, ingTempAmount);
    this.newShoppingItem.emit(newItem);
  }
  constructor() { }

  ngOnInit() {
  }

}
