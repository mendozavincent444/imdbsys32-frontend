import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFarmerComponent } from './components/search-farmer/search-farmer.component';
import { CreateFarmerComponent } from './components/create-farmer/create-farmer.component';
import { UpdateFarmerComponent } from './components/update-farmer/update-farmer.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';

const routes: Routes = [
  { path: 'search', component: SearchFarmerComponent }, 
  { path: 'create', component: CreateFarmerComponent },
  { path: 'update/:id', component: UpdateFarmerComponent },
  { path: 'todo', component: TodoListComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: '**', redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
