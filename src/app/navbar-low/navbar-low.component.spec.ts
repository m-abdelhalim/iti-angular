import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLowComponent } from './navbar-low.component';

describe('NavbarLowComponent', () => {
  let component: NavbarLowComponent;
  let fixture: ComponentFixture<NavbarLowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarLowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
