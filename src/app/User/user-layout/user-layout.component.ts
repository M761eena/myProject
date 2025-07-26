import { Component } from '@angular/core';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [
    UserHeaderComponent,
    UserFooterComponent,
    RouterModule,
  ],
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css'],
})
export class UserLayoutComponent { }
