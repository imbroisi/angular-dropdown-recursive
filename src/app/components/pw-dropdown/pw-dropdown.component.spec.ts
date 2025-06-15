import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwDropdownComponent } from './pw-dropdown.component';

describe('PwDropdownComponent', () => {
  let component: PwDropdownComponent;
  let fixture: ComponentFixture<PwDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PwDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PwDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
