import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Farmer } from 'src/app/common/farmer';
import { FarmerStorageService } from 'src/app/services/farmer-storage.service';
import { FarmerService } from 'src/app/services/farmer.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-update-farmer',
  templateUrl: './update-farmer.component.html',
  styleUrls: ['./update-farmer.component.css']
})
export class UpdateFarmerComponent {

  updateFarmerForm: FormGroup;
  farmerToUpdate: Farmer;
  updateId: number;

  constructor(private farmerService: FarmerService,
    private router: Router,
    private route: ActivatedRoute,
    private farmerStorageService: FarmerStorageService) { }

  ngOnInit(): void {
    this.updateId = this.route.snapshot.params["id"];

    this.farmerToUpdate = this.farmerService.getFarmer(this.updateId);

    this.updateFarmerForm = new FormGroup({
      firstName: new FormControl(this.farmerToUpdate.firstName, Validators.required),
      lastName: new FormControl(this.farmerToUpdate.lastName, Validators.required),
      email: new FormControl(this.farmerToUpdate.email, [Validators.required, Validators.email]),
      address: new FormControl(this.farmerToUpdate.address, Validators.required),
      contactNumber: new FormControl(this.farmerToUpdate.contactNumber, Validators.required)
    });

  }

  onSubmit(): void {
    let updatedFarmer = new Farmer(
      this.firstName.value,
      this.lastName.value,
      this.email.value,
      this.address.value,
      this.contactNumber.value,
      this.farmerToUpdate.id
    );

    this.farmerStorageService.updateFarmer(updatedFarmer).subscribe();

    this.router.navigate(["/search"]);
    Swal.fire("Farmer Successfuly Updated", "Done", "success");
  }

  public get firstName() {
    return this.updateFarmerForm.controls["firstName"];
  }

  public get lastName() {
    return this.updateFarmerForm.controls["lastName"];
  }

  public get email() {
    return this.updateFarmerForm.controls["email"];
  }

  public get address() {
    return this.updateFarmerForm.controls["address"];
  }

  public get contactNumber() {
    return this.updateFarmerForm.controls["contactNumber"];
  }

}
