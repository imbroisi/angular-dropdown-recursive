import { Component } from '@angular/core';
import { DropdownItem } from 'src/app/components/pw-dropdown-recursive/pw-dropdown-recursive.component';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
  dropdownData: DropdownItem = {
    label: "Example Menu",
    options: [
      {
        item: 'Item 1',
        id: 'a'
      },
      {
        item: 'Item 2',
        id: 'b'
      },
      {
        item: 'Item 3',
        id: 'c'
      },
      {
        label: 'Submenu 1',
        options: [
          {
            item: 'x',
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
  //       item: 'Item 1',
  //       id: 'https://www.google.com'
  //     },
  //     {
  //       item: 'Item 2',
  //       id: 'https://www.google.com'
  //     },
  //     {
  //       label: 'Submenu 1',
  //       options: [
  //         {
  //           item: 'SubItem A',
  //           id: 'https://www.google.com'
  //         },
  //         {
  //           item: 'SubItem A',
  //           id: 'https://www.google.com'
  //         },
  //         {
  //           label: 'Nested Menu',
  //           options: [
  //             {
  //               item: 'SubItem x',
  //               id: 'https://www.google.com'
  //             },
  //             {
  //               item: 'SubItem y',
  //               id: 'https://www.google.com'
  //             },
  //           ]
  //         }
  //       ]
  //     }
  //   ]
  // };
}
