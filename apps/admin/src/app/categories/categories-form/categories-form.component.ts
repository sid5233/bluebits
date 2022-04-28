/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService, Category } from '@bluebits/products';
import { MessageService } from 'primeng/api';
import { timer } from 'rxjs';

@Component({
  selector: 'admin-categories-form',
  templateUrl: './categories-form.component.html'
})
export class CategoriesFormComponent implements OnInit {

  form : FormGroup;
  isSubmitted = false
  constructor(private formBuilder : FormBuilder, private categoriesService: CategoriesService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name : ['',Validators.required],
      icon: ['',Validators.required]
    });
  }

  onSubmit(){
    this.isSubmitted = true;
    if(this.form.invalid){
      return;
    }

    const category : Category = {
      name : this.categoryForm.name.value,
      icon : this.categoryForm.icon.value
    }

    this.categoriesService.createCategory(category).subscribe(response => {
    
        this.messageService.add({severity:'success', summary:'Success', detail:'Category is Created'});
        timer(2000)
        .toPromise()
        .then(() => {
          this.location.back();
        });
    },
    (error) => {
      this.messageService.add({severity:'error', summary:'error', detail:'Category is not Created'});
    });    

  }

  get categoryForm(){
    return this.form.controls;
  }

}
