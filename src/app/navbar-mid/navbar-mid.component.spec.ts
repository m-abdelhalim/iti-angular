import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMidComponent } from './navbar-mid.component';

describe('NavbarMidComponent', () => {
  let component: NavbarMidComponent;
  let fixture: ComponentFixture<NavbarMidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarMidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarMidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
