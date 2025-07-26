import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../../../shared/category/category.service';
import { ToastrService } from 'ngx-toastr';
import { Categories } from '../../../shared/models/addCategories/categories.model'; 

@Component({
  selector: 'app-add-category',
  standalone: true, 
  imports: [RouterLink],
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'] 
})
export class AddCategoryComponent {
  categoryObj: Categories = new Categories(); 

  constructor(
    private categoryService: CategoryService,
    private toastr: ToastrService
  ) {}

  submit() {
    this.categoryService.addCategory(this.categoryObj).then(
      (res: any) => {
        if (res) {
          this.toastr.success("Category Added");
        } else {
          this.toastr.error("Category not added");
        }
      },
      (err: any) => {
        this.toastr.error("Something went wrong");
        console.error(err);
      }
    );
  }
}
