import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAngajatComponent } from './add-edit-angajat.component';

describe('AddEditAngajatComponent', () => {
  let component: AddEditAngajatComponent;
  let fixture: ComponentFixture<AddEditAngajatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAngajatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditAngajatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
