import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../common/task';

@Injectable({
  providedIn: 'root'
})
export class TaskStorageService {

  private baseUrl = "http://localhost:8080/api/tasks";

  constructor(private httpClient: HttpClient) { }

  public storeTask(task: Task) {
    return this.httpClient.post(this.baseUrl, task, {responseType: "text"});
  }

  public fetchTasks() {
    return this.httpClient.get<Task[]>(this.baseUrl);
  }

  public acceptTask(taskId: String) {
    return this.httpClient.patch(this.baseUrl, taskId, {responseType: "text"});
  }

  public deleteTask(taskId: String) {
    const deleteUrl = `${this.baseUrl}/${taskId}`;
    return this.httpClient.delete(deleteUrl, {responseType: "text"});
  }

}
