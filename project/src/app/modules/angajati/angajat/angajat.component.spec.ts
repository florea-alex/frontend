import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngajatComponent } from './angajat.component';

describe('AngajatComponent', () => {
  let component: AngajatComponent;
  let fixture: ComponentFixture<AngajatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngajatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngajatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
