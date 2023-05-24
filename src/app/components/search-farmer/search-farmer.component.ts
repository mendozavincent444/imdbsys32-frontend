import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Farmer } from 'src/app/common/farmer';
import { FarmerStorageService } from 'src/app/services/farmer-storage.service';
import { FarmerService } from 'src/app/services/farmer.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-search-farmer',
  templateUrl: './search-farmer.component.html',
  styleUrls: ['./search-farmer.component.css']
})
export class SearchFarmerComponent implements OnInit {

  searchForm: FormGroup;
  farmers: Farmer[] = [];

  constructor(private farmerService: FarmerService,
              private farmerStorageService: FarmerStorageService,
              private router: Router) { }

  ngOnInit(): void {

    this.searchForm = new FormGroup({
      search: new FormControl("")
    });

    
  }

  public get search() {
    return this.searchForm.controls["search"];
  }

  onSearch() {
    let searchValue = this.search.value;

    this.farmerStorageService.searchFarmer(searchValue).subscribe(response => this.farmers = response);

  }

  onLoad() {
    this.farmerStorageService.fetchFarmers().subscribe((response) => {
      this.farmers = response;
      this.farmerService.updateFarmers(response);
    });
  }

  onDelete(index: number) {
    this.farmerStorageService.deleteFarmer(this.farmers.at(index)).subscribe();
    this.farmers.splice(index, 1);
    this.farmerService.updateFarmers(this.farmers);
    Swal.fire("Farmer Successfuly Deleted", "Done", "success");
  }



  onUpdate(index: number) {
    this.router.navigate([`/update/${index}`]);
  }

  
}
