import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFarmerComponent } from './components/create-farmer/create-farmer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchFarmerComponent } from './components/search-farmer/search-farmer.component';
import { UpdateFarmerComponent } from './components/update-farmer/update-farmer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateFarmerComponent,
    NavbarComponent,
    SearchFarmerComponent,
    UpdateFarmerComponent,
    TodoListComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
