import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { CategoriesService } from './services/categories.service';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';







const routes: Routes = [{ path: '', component: ShellComponent, 
    children: [
      {path:'dashboard', component:DashboardComponent} ,
      {path:'categories', component:CategoriesListComponent} ,
      {path:'categories/form', component:CategoriesFormComponent} 
    ]
   }];
@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    DashboardComponent,
    ShellComponent,
    SidebarComponent,
    CategoriesListComponent,
    CategoriesFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    CardModule,
    ToolbarModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule
    
  ],
  providers: [CategoriesService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule { }
