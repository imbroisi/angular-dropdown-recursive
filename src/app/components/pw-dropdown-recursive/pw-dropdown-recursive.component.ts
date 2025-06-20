import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Example of the dropdown items
 * 
 {
    label: "<b>Example Menu</b>",
    options: [
      {
        display: 'Item 1',
        id: 'a'
      },
      {
        display: 'Item 2',
        id: 'b'
      },
      {
        display: '<i>Item 3</i>',
        id: 'c'
      },
      {
        label: 'Submenu 1',
        options: [
          {
            display: 'x',
            id: 'XXXX'
          },
        ]
      }
    ]
  }
    
 */

export interface Option {
  // display: it is valid to use HTML as string, e.g. '<b>Item 1</b>'
  display: string;
  id: string;
}

export interface DropdownItem {
  // label: it is valid to use HTML as string
  label?: string;
  options?: (Option | DropdownItem)[]
}

@Component({
  selector: 'pw-dropdown-recursive',
  templateUrl: './pw-dropdown-recursive.component.html',
  styleUrls: ['./pw-dropdown-recursive.component.scss']
})
export class PwDropdownComponent {
  @Input() items: DropdownItem = {};

  // returns the id of the option clicked
  @Output() onClickItem = new EventEmitter<string>();
  
  isOpen: boolean = false;

  ngOnInit() {
    this.isOpen = !this.items.label;
  }


  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  isItem(value: any): boolean {
    return !!value.display && !!value.id;
  }

  isDropdown(value:any): boolean {
    return !!value.options;
  }

  asOption(val: any): Option { 
    return val; 
  }

  asDropdownItem(val: any): DropdownItem { 
    return val; 
  }
}
