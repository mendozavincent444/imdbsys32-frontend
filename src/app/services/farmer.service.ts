import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Farmer } from '../common/farmer';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  farmers$: BehaviorSubject<Farmer[]> = new BehaviorSubject<Farmer[]>(null);

  constructor() {}

  public updateFarmers(farmers: Farmer[]): void {
    this.farmers$.next(farmers.slice());
  }

  public getFarmer(farmerId: number): Farmer {
    let farmer = this.farmers$.getValue().slice().at(farmerId);
    return farmer;
  }



}
