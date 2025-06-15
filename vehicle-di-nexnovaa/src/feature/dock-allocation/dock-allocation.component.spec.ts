import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DockAllocationComponent } from './dock-allocation.component';

describe('DockAllocationComponent', () => {
  let component: DockAllocationComponent;
  let fixture: ComponentFixture<DockAllocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DockAllocationComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DockAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
