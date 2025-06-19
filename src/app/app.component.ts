import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  dropdownItems = {
    label: "Hello",
    options: [
      'Option 1',
      'Option 2',
      {
        label: 'Option 3',
        options: [
          'Option A',
          'Option B',
          {
            label: 'Option C',
            options: [
              'Option xxxxx',
              'Option yyyyy',
            ]
          }
        ]
      },
      {
        label: 'Option 4',
        options: [
          'Option BLZ',
          'Option OK',
        ]
      }
    ]
  };
};
