import { Component } from '@angular/core';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { RouterModule } from '@angular/router';
import { AddCategoryComponent } from '../category-layout/add-category/add-category.component';


@Component({
  selector: 'app-admin-layout',
  imports: [AdminFooterComponent, AdminHeaderComponent,AddCategoryComponent, RouterModule,],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

}
