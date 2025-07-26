import { Routes } from '@angular/router';
import { HomeComponent } from './User/home/home.component';
import { UserLayoutComponent } from './User/user-layout/user-layout.component';
import { AboutComponent } from './User/about/about.component';
import { ContactComponent } from './User/contact/contact.component';
import { AdminLayoutComponent } from './Admin/admin-layout/admin-layout.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { CategoryLayoutComponent } from './Admin/category-layout/category-layout.component';
import { AddCategoryComponent } from './Admin/category-layout/add-category/add-category.component';
import { UpdateCategoryComponent } from './Admin/category-layout/update-category/update-category.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: "register", component: RegisterComponent},
      { path: "login", component: LoginComponent}
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'category', component: CategoryLayoutComponent },
      { path: 'add-category', component: AddCategoryComponent },
      { path: 'update-category', component: UpdateCategoryComponent }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
