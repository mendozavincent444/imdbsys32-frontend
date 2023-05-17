import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Farmer } from '../common/farmer';

@Injectable({
  providedIn: 'root'
})
export class FarmerStorageService {

  private baseUrl = "http://localhost:8080/api/farmers";

  constructor(private httpClient: HttpClient) { }

  public storeFarmer(farmer: Farmer) {
    return this.httpClient.post(this.baseUrl, farmer);
  }

  public fetchFarmers() {
    return this.httpClient.get<Farmer[]>(this.baseUrl);    
  }

  public deleteFarmer(farmer: Farmer) {
    const deleteUrl = `${this.baseUrl}/${farmer.id}`;
    return this.httpClient.delete(deleteUrl);
  }

  public updateFarmer(farmer: Farmer) {
    const updateUrl = `${this.baseUrl}/${farmer.id}`;
    return this.httpClient.put(updateUrl, farmer);
  }

  public searchFarmer(searchValue: String) {
    const searchUrl = `${this.baseUrl}/search?searchValue=${searchValue}`;
    return this.httpClient.get<Farmer[]>(searchUrl);
  }
}
