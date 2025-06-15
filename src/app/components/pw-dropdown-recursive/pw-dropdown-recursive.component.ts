import { Component, Input } from '@angular/core';

/**
 * Example of the dropdown items
 * 
  {
    label: "Hello",
    options: [
      'Option 1',
      'Option 2',
      {
        label: 'Option 3',
        options: [
          'Option A',
          'Option B',
        ]
      }
    ]
  };

 */

interface DropdownItem {
  label: string;
  options: (string | DropdownItem)[];
}

@Component({
  selector: 'pw-dropdown-recursive',
  templateUrl: './pw-dropdown-recursive.component.html',
  styleUrls: ['./pw-dropdown-recursive.component.scss']
})
export class PwDropdownComponent {
  @Input() items: DropdownItem = {
    label: '',
    options: []
  };
  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  isString(value: string | DropdownItem) {
    return typeof value === 'string';
  }

  isDropdownItem(value: string | DropdownItem): value is DropdownItem {
    return typeof value === 'object';
  }
}
