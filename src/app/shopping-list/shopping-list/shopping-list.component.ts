import { Component, OnInit } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 3),
        new Ingredient('Tomatoes', 5),
        new Ingredient('Bananas', 2)
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
