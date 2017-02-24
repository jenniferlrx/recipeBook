import { Component, OnInit , OnDestroy} from '@angular/core';
import {Recipe} from '../recipe';
import {RecipeService} from '../recipe.service';
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {Ingredient} from "../../shared/ingredient";
import {Subscription} from "rxjs/Rx";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private recipeIndex: number;
	selectedRecipe: Recipe;
  constructor(
    private recipeService: RecipeService, 
    private sls:ShoppingListService, 
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
  	this.subscription = this.route.params.subscribe(
      (params:any) => {
        this.recipeIndex = params['id'];
        this.selectedRecipe =  this.recipeService.getRecipe(this.recipeIndex);
      }
    )
  }
  onAddToShoppingList(items: Ingredient[]){
  	this.sls.addItems(items);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onDelete(){
    this.recipeService.deleteRecipe(this.recipeIndex);
    this.router.navigate(['/recipes']);
  }
  onEdit(){
    this.router.navigate(['/recipes',this.recipeIndex ,'edit']);
  }

}
