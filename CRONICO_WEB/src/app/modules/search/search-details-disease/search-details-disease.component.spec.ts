import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDetailsDiseaseComponent } from './search-details-disease.component';

describe('SearchDetailsDiseaseComponent', () => {
  let component: SearchDetailsDiseaseComponent;
  let fixture: ComponentFixture<SearchDetailsDiseaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDetailsDiseaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDetailsDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
