import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwDropdownComponent } from './pw-dropdown-recursive.component';

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
    component.items = {
      label: 'Test',
      options: ['Option 1', 'Option 2']
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle dropdown when clicked', () => {
    expect(component.isOpen).toBeFalse();
    component.toggleDropdown();
    expect(component.isOpen).toBeTrue();
    component.toggleDropdown();
    expect(component.isOpen).toBeFalse();
  });

  it('should display title correctly', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.title').textContent).toContain('Test');
  });

  it('should handle nested options', () => {
    component.items = {
      label: 'Parent',
      options: [
        'Item 1',
        {
          label: 'Nested',
          options: ['Nested Item 1']
        }
      ]
    };
    fixture.detectChanges();
    expect(component.isString(component.items.options[0])).toBeTrue();
    expect(component.isString(component.items.options[1])).toBeFalse();
  });
});
