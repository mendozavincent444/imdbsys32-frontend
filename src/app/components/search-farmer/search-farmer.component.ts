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

    this.farmerStorageService.fetchFarmers().subscribe((response) => {
      this.farmerService.farmers$.next(response);
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
    this.farmers = this.farmerService.farmers$.getValue();
  }

  onDelete(index: number) {
    
    const farmerId = this.farmers.at(index).id;

    this.farmers.splice(index, 1);
    this.farmerService.updateFarmers(this.farmers);
    this.farmerStorageService.deleteFarmer(farmerId).subscribe((response) => {
      Swal.fire(response, "Done", "success");
    });      
  }



  onUpdate(index: number) {
    this.router.navigate([`/update/${index}`]);
  }

  
}
