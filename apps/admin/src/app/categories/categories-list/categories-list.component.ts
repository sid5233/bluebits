import { Component, OnInit } from '@angular/core';
import {CategoriesService, Category } from '@bluebits/products'

@Component({
  selector: 'admin-categories-list',
  templateUrl: './categories-list.component.html',
  styles: [
  ]
})
export class CategoriesListComponent implements OnInit {

  categories: Category[] = [];
  constructor(private categoryService : CategoriesService) { }

  ngOnInit(): void {

    this.categoryService.getCategories().subscribe((cats) => {
      this.categories = cats;
    })
  }

}
