import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartiComponent } from './carti.component';

describe('CartiComponent', () => {
  let component: CartiComponent;
  let fixture: ComponentFixture<CartiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
