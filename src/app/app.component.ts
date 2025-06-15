import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <h1>Password Dropdown Example</h1>
      <pw-dropdown-recursive [items]="dropdownItems"></pw-dropdown-recursive>
    </div>
  `,
  styles: [`
    .app {
      text-align: center;
      padding: 20px;
    }
  `]
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
