import { Component } from '@angular/core';
import { DropdownItem } from 'src/app/components/pw-dropdown-recursive/pw-dropdown-recursive.component';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
  dropdownData: DropdownItem = {
    label: '<span style="color: #007bff; font-weight: 600; font-size: 18px;">Example Menu</span>',
    options: [
      {
        display: '<span style="color: #28a745; font-weight: 500;">Item 1</span>',
        id: 'a'
      },
      {
        display: '<span style="color: #dc3545; font-weight: 500;">Item 2</span>',
        id: 'b'
      },
      {
        display: '<span style="color: #ffc107; font-weight: 500;"><i>Item 3</i></span>',
        id: 'c'
      },
      {
        label: '<span style="color: #6f42c1; font-weight: 600;">Submenu 1</span>',
        options: [
          {
            display: '<span style="color: #17a2b8; font-weight: 500;">x</span>',
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
