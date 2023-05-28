import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Farmer } from 'src/app/common/farmer';
import { FarmerStorageService } from 'src/app/services/farmer-storage.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-farmer',
  templateUrl: './create-farmer.component.html',
  styleUrls: ['./create-farmer.component.css']
})
export class CreateFarmerComponent implements OnInit {

  addFarmerForm: FormGroup;


  constructor(private farmerStorageService: FarmerStorageService) { }

  ngOnInit(): void {
    this.addFarmerForm = new FormGroup({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      address: new FormControl("", Validators.required),
      contactNumber: new FormControl("", Validators.required)
    });
  }

  onSubmit(): void {
    let newFarmer: Farmer = new Farmer(
      this.firstName.value,
      this.lastName.value,
      this.email.value,
      this.address.value,
      this.contactNumber.value
    );

    this.addFarmerForm.reset();
    this.farmerStorageService.storeFarmer(newFarmer).subscribe((response) => {
      Swal.fire(response, "Done", "success");
    });

  }

  get firstName() {
    return this.addFarmerForm.controls["firstName"];
  }

  get lastName() {
    return this.addFarmerForm.controls["lastName"];
  }

  get email() {
    return this.addFarmerForm.controls["email"];
  }

  get address() {
    return this.addFarmerForm.controls["address"];
  }

  get contactNumber() {
    return this.addFarmerForm.controls["contactNumber"];
  }


}
