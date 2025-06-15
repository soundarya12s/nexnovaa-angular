import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DriversVehiclesComponent } from './drivers-vehicles.component';

describe('DriversVehiclesComponent', () => {
  let component: DriversVehiclesComponent;
  let fixture: ComponentFixture<DriversVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriversVehiclesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DriversVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
