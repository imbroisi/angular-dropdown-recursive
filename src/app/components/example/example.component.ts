import { Component } from '@angular/core';
import { DropdownItem } from 'src/app/components/pw-dropdown-recursive/pw-dropdown-recursive.component';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
  dropdownData: DropdownItem = {
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
