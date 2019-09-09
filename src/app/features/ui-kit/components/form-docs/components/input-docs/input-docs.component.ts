import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { timeout } from "q";

@Component({
  templateUrl: './input-docs.component.html'
})
export class InputDocsComponent implements OnInit {
  name: FormControl = new FormControl('');
  name2: FormControl = new FormControl('');
  name3: FormControl = new FormControl('');
  name4: FormControl = new FormControl('');
  name5: FormControl = new FormControl('');
  name6: FormControl = new FormControl({ value: '', disabled: true });
  name7: FormControl = new FormControl('');
  name8: FormControl = new FormControl('');
  password: FormControl = new FormControl('');

  hints: Array<string> = [
    'Please put your first and last name here',
    'This is a second hint for no reason'
  ];

  basicFormControl: string = `
  import { Component } from '@angular/core';
  import { FormControl } from '@angular/forms';

  @Component({
    selector: 'app-name-editor',
    templateUrl: './name-editor.component.html',
    styleUrls: ['./name-editor.component.css']
  })
  export class NameEditorComponent {
    name = new FormControl('');
  }
  `;

  basicInputExample: string = `
  <go-input [control]="name"></go-input>
  `;
  basicInputLabelExample: string = `
  <go-input
    [control]="name"
    label="Your Name"
  ></go-input>
  `;
  basicInputKeyExample: string = `
  <go-input
    [control]="name"
    label="Your Name"
    key="your-name-input"
  ></go-input>
  `;
  basicInputKeyExampleOutput: string = `
  <label for="your-name-input">Your Name</label>
  <input type="text" id="your-name-input" [formControl]="name">
  `;
  basicHintsTemplate: string = `
  hints: Array<string> = [
    'Please put your first and last name here',
    'This is a second hint for no reason'
  ];
  `;
  basicInputHintsExample: string = `
  <go-input
    label="Your Name"
    [control]="name"
    [hints]="hints"
  ></go-input>
  `;
  basicErrorsTemplate: string = `
  this.name.setErrors([
    {
      message: 'An error occurred.'
    },
    {
      type: 'Required',
      message: 'This is a required input.'
    }
  ]);
  `;
  basicDisabledExample: string = `
  firstName: new FormControl({
    value: '',
    disabled: true
  });
  `;
  basicDisabledExample2: string = `
  lastName: new FormControl('');

  ngOnInit(): void {
    this.lastName.disable();
    // Use this.lastName.enable(); to re-enable the input.
  }
  `;
  basicPlaceholderExample: string = `
  <go-input
    [control]="name"
    label="Your Name"
    placeholder="Nymphadora Tonks"
  ></go-input>
  `;
  basicPasswordExample: string = `
  <go-input
    [control]="password"
    label="Your Password"
    inputType="password"
  ></go-input>
  `;

  ngOnInit(): void {
    setTimeout((): void => {
      this.name5.setErrors([
        {
          message: 'An error occurred.'
        },
        {
          type: 'Required',
          message: 'This is a required input.'
        }
      ]);

      this.name7.disable();
    }, 500);
  }
}
