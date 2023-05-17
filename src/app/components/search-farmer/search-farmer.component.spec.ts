import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFarmerComponent } from './search-farmer.component';

describe('SearchFarmerComponent', () => {
  let component: SearchFarmerComponent;
  let fixture: ComponentFixture<SearchFarmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFarmerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
