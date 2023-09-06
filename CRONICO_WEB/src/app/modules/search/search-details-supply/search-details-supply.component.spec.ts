import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDetailsSupplyComponent } from './search-details-supply.component';

describe('SearchDetailsSupplyComponent', () => {
  let component: SearchDetailsSupplyComponent;
  let fixture: ComponentFixture<SearchDetailsSupplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDetailsSupplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDetailsSupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
