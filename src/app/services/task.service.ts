import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../common/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks$: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(null);

  constructor() { }

  public updateTasks(tasks: Task[]): void {
    this.tasks$.next(tasks.slice());
  }

}
