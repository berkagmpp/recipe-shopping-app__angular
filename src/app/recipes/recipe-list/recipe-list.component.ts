import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.module';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simple test recipe', 'https://www.health.com/thmb/HYCUnztcpvlKSASwjJP6GUDHPqI=/900x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/Tout-Pizza-Recipes-Gallery-2000-cfbe06b50c2a4542976cd33378ab7acd.jpg'),
        new Recipe('A Test Recipe 2', 'This is simple test recipe 2', 'https://www.health.com/thmb/HYCUnztcpvlKSASwjJP6GUDHPqI=/900x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/Tout-Pizza-Recipes-Gallery-2000-cfbe06b50c2a4542976cd33378ab7acd.jpg') 
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
