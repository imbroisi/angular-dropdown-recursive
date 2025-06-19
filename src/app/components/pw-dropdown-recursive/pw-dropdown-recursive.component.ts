import { Component, EventEmitter, Input, Output } from '@angular/core';

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

export interface Option {
  item: string;
  id: string;
}

export interface DropdownItem {
  label?: string;
  options?: (Option | DropdownItem)[]
}

@Component({
  selector: 'pw-dropdown-recursive',
  templateUrl: './pw-dropdown-recursive.component.html',
  styleUrls: ['./pw-dropdown-recursive.component.scss']
})
export class PwDropdownComponent {
  @Input() items: DropdownItem = {
    label: '',
    options: [{
      item: 'Item default',
      id: ''
    }]
  };

  @Output() onClickItem = new EventEmitter<string>();
  
  isOpen: boolean = false;

  ngOnInit() {
    this.isOpen = !this.items.label;
  }

  get formattedLabel(): string {
    return this.items.label || '';
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  isItem(value: any) {
    return !!value.item && !!value.id;
  }

  isDropdown(value:any) {
    return !!value.options;
  }

  asOption(val: any): Option { 
    return val; 
  }

  asDropdownItem(val: any): DropdownItem { 
    return val; 
  }
}
