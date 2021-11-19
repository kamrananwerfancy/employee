import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryissueComponent } from './salaryissue.component';

describe('SalaryissueComponent', () => {
  let component: SalaryissueComponent;
  let fixture: ComponentFixture<SalaryissueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryissueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
