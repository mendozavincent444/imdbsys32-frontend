import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/common/task';
import { TaskStorageService } from 'src/app/services/task-storage.service';
import { TaskService } from 'src/app/services/task.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService,
    private taskStorageService: TaskStorageService) { }


  ngOnInit(): void {
    this.taskStorageService.fetchTasks().subscribe((response) => {
      this.taskService.updateTasks(response);
    })

  }

  onLoad() {
    this.taskService.tasks$.subscribe((response) => this.tasks = response);
  }

  onDelete(index: number) {
    let taskId = this.tasks.at(index).id;
    this.tasks.splice(index, 1);
    this.taskService.updateTasks(this.tasks.slice());
    this.taskStorageService.deleteTask(taskId).subscribe((response) => {
      Swal.fire(response, "Done", "success");
    });
  }

  onAccept(index: number) {

    let taskId = this.tasks.at(index).id;
    this.taskStorageService.acceptTask(taskId).subscribe((response) => {
      Swal.fire(response, "Done", "success");
    });

    this.taskStorageService.fetchTasks().subscribe((response) => {
      this.tasks = response;
      this.taskService.updateTasks(response);
    })
    
  }




}
