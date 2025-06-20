import { Component } from '@angular/core';
import { DropdownItem } from 'src/app/components/pw-dropdown-recursive/pw-dropdown-recursive.component';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
  dropdownData: DropdownItem = {
    label: '<span class="menu-label">Example Menu</span>',
    options: [
      {
        display: '<span class="item-green">Item 1</span>',
        id: 'a'
      },
      {
        display: '<span class="item-red">Item 2</span>',
        id: 'b'
      },
      {
        display: '<span class="item-yellow"><i>Item 3</i></span>',
        id: 'c'
      },
      {
        label: '<span class="submenu-label">Submenu 1</span>',
        options: [
          {
            display: '<span class="item-cyan">x</span>',
            id: 'XXXX'
          },
        ]
      }
    ]
  }

  onClickItem(id: string) {
    console.log(id);
  }

  // dropdownData: DropdownItem = {
  //   label: "Example Menu",
  //   options: [
  //     {
  //       display: 'Item 1',
  //       id: 'https://www.google.com'
  //     },
  //     {
  //       display: 'Item 2',
  //       id: 'https://www.google.com'
  //     },
  //     {
  //       label: 'Submenu 1',
  //       options: [
  //         {
  //           display: 'SubItem A',
  //           id: 'https://www.google.com'
  //         },
  //         {
  //           display: 'SubItem A',
  //           id: 'https://www.google.com'
  //         },
  //         {
  //           label: 'Nested Menu',
  //           options: [
  //             {
  //               display: 'SubItem x',
  //               id: 'https://www.google.com'
  //             },
  //             {
  //               display: 'SubItem y',
  //               id: 'https://www.google.com'
  //             },
  //           ]
  //         }
  //       ]
  //     }
  //   ]
  // };
}
