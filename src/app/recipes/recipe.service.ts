import { Recipe} from './recipe';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient';
export class RecipeService {
	private recipes:Recipe[] = [  
		new Recipe('Hot Dog','Sausage, bread','http://www.smithfieldfoods.com/images/home/packaged-brands/gwaltney-food.jpg',[new Ingredient('bread',2), new Ingredient('sausage',1)]),
	  	new Recipe('Burger ','Beef, veg','http://intimesoft.com/wp-content/uploads/2017/01/fast-food.jpg',[new Ingredient('bread',2), new Ingredient('beef',1)])
  	];
  constructor() { }

  getRecipes(){
  	return this.recipes;
  }

  selectRecipe = new EventEmitter<Recipe>(); 

  selectedRecipe(recipe: Recipe){
  	this.selectRecipe.emit(recipe);
  }
  getRecipe(id: number){
    return this.recipes[id];
  }
  deleteRecipe(id: number){
    this.recipes.splice(id,1);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }
}
