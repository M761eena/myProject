import { Component } from '@angular/core';
import { AddCategoryComponent } from './add-category/add-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { RouterLink, RouterModule } from '@angular/router';
import { AdminFooterComponent } from '../admin-layout/admin-footer/admin-footer.component';
import { AdminHeaderComponent } from '../admin-layout/admin-header/admin-header.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-category-layout',
  imports: [AddCategoryComponent,UpdateCategoryComponent,RouterModule, AdminFooterComponent,AdminHeaderComponent, DashboardComponent],
  templateUrl: './category-layout.component.html',
  styleUrl: './category-layout.component.css'
})
export class CategoryLayoutComponent {

}
