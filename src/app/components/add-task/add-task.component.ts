import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Farmer } from 'src/app/common/farmer';
import { Task } from 'src/app/common/task';
import { FarmerStorageService } from 'src/app/services/farmer-storage.service';
import { FarmerService } from 'src/app/services/farmer.service';
import { TaskStorageService } from 'src/app/services/task-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  addTaskForm: FormGroup;
  farmers: Farmer[] = [];
  

  constructor(private taskStorageService: TaskStorageService,
              private farmerService: FarmerService) { }

  ngOnInit(): void {
    this.addTaskForm = new FormGroup({
      plantName: new FormControl("", Validators.required),
      pHLevel: new FormControl("", Validators.required),
      datePlanted: new FormControl("", Validators.required),
      farmer: new FormControl("", Validators.required)
    });

    this.farmerService.farmers$.subscribe((response) => this.farmers = response);
  }

  onSubmit(): void {

    const INITIAL_STATUS: String = "Pending";

    let newTask: Task = new Task(
      this.plantName.value,
      this.pHLevel.value,
      this.datePlanted.value,
      this.farmer.value,
      INITIAL_STATUS
    );

    this.addTaskForm.reset();
    this.taskStorageService.storeTask(newTask).subscribe((response) => {
      Swal.fire(response, "Done", "success");
    });
  }

  get plantName() {
    return this.addTaskForm.controls["plantName"];
  }

  get pHLevel() {
    return this.addTaskForm.controls["pHLevel"];
  }

  get datePlanted() {
    return this.addTaskForm.controls["datePlanted"];
  }

  get farmer() {
    return this.addTaskForm.controls["farmer"];
  }

}
