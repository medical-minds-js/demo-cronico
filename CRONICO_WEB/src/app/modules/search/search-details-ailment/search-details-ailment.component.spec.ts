import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDetailsAilmentComponent } from './search-details-ailment.component';

describe('SearchDetailsAilmentComponent', () => {
  let component: SearchDetailsAilmentComponent;
  let fixture: ComponentFixture<SearchDetailsAilmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDetailsAilmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDetailsAilmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
