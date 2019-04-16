import { Component, ViewChild } from '@angular/core';

@Component({
  templateUrl: './forms.component.html'
})
export class FormsComponent {
  pageTitle: string = "Forms";

  basicForm: string = `
  <form class="go-form">
    <div class="go-container">
      <div class="go-column go-column--50">
        <label for="first-name-input" class="go-form__label">First Name</label>
        <input class="go-form__input" id="first-name-input" placeholder="Jonny" type="text">
      </div>
      <div class="go-column go-column--50">
        <label for="last-name-input" class="go-form__label">Last Name</label>
        <input class="go-form__input" id="last-name-input" placeholder="Appleseed" type="text">
      </div>
      <div class="go-column go-column--100">
        <label for="email-input" class="go-form__label">Email</label>
        <input class="go-form__input" id="email-input" placeholder="your@email.com" type="email">
      </div>
      <div class="go-column go-column--100">
        <label for="password-input" class="go-form__label">Password</label>
        <input class="go-form__input" id="password-input" placeholder="**************" type="password">
      </div>
      <div class="go-column go-column--100 go-column--no-padding">
        <div>
          <go-button buttonVariant="button">Submit</go-button>
        </div>
      </div>
    </div>
  </form>
  `;

  formHints: string = `
  <form class="go-form">
    <div class="go-container">
      <div class="go-column go-column--100">
        <label for="phone-input-hint" class="go-form__label">Phone Number</label>
        <input class="go-form__input" id="phone-input-hint" placeholder="+0(000)000-0000">
        <p class="go-hint">
          This is the phone number for your work phone. 
          Please us the following format: +0(000)000-0000.
          If you have any further questions please contact support.
        </p>
      </div>

      <div class="go-column go-column--100">
        <label for="phone-input-error" class="go-form__label">Phone Number</label>
        <input class="go-form__input go-form__input--error" id="phone-input-error" placeholder="+0(000)000-0000">
        <p class="go-hint go-hint--error">
          <span class="go-hint__status">Error:</span>
          Phone number is a required input.
        </p>
        <p class="go-hint">
          This is the phone number for your work phone. 
          Please us the following format: +0(000)000-0000.
          If you have any further questions please contact support.
        </p>
      </div>
    </div>
  </form>
  `;

  inputModifiers: string = `
  <form class="go-form">
    <div class="go-container">
      <div class="go-column go-column--100">
        <label for="email-input" class="go-form__label">Normal Input</label>
        <input class="go-form__input" id="normal-input" placeholder="Normal Input" type="text">
      </div>
      <div class="go-column go-column--100">
        <label for="email-input" class="go-form__label">Disabled Input</label>
        <input class="go-form__input" id="disabled-input" placeholder="Disabled Input" type="text" disabled>
      </div>
      <div class="go-column go-column--100">
        <label for="email-input" class="go-form__label">Error Input</label>
        <input class="go-form__input go-form__input--error" id="error-input" placeholder="Error Input" type="text">
        <p class="go-hint go-hint--error">
          <span class="go-hint__status">Error:</span>
          This input is required. Please fill this out to proceed.
        </p>
      </div>
    </div>
  </form>
  `;

  selectModifiers: string = `
  <form class="go-form">
    <div class="go-container">
      <div class="go-column go-column--100">
        <label for="normal-select" class="go-form__label">Normal Select</label>
        <select class="go-form__select" id="normal-select">
          <option value="" disabled selected>.go-form__select</option>
          <option value="1">Option #1</option>
          <option value="2">Option #2</option>
        </select>
      </div>
      <div class="go-column go-column--100">
        <label for="email-input" class="go-form__label">Disabled Select</label>
        <select class="go-form__select" id="disabled-select" disabled>
          <option value="" disabled selected>.go-form__select:disabled</option>
          <option value="1">Option #1</option>
          <option value="2">Option #2</option>
        </select>
      </div>
      <div class="go-column go-column--100">
        <label for="email-input" class="go-form__label">Error Select</label>
        <select class="go-form__select go-form__select--error" id="error-select">
          <option value="" disabled selected>.go-form__select.go-form__select--error</option>
          <option value="1">Option #1</option>
          <option value="2">Option #2</option>
        </select>
        <p class="go-hint go-hint--error">
          <span class="go-hint__status">Error:</span>
          This input is required. Please select an option to proceed.
        </p>
      </div>
    </div>
  </form>
  `;

  checkboxModifiers: string = `
  <form class="go-form">
    <fieldset class="go-form__fieldset">
      <legend class="go-form__legend">Select a Default Option</legend>
      <div>
        <input class="go-form__checkbox" id="default-checkbox-1" type="checkbox" checked>
        <label for="default-checkbox-1" class="go-form__label go-form__label--inline">
          Option #1
        </label>
      </div>
      <div>
        <input class="go-form__checkbox" id="default-checkbox-2" type="checkbox">
        <label for="default-checkbox-2" class="go-form__label go-form__label--inline">
          Option #2
        </label>
      </div>
    </fieldset>
    <fieldset class="go-form__fieldset" disabled>
      <legend class="go-form__legend">Select a Disabled Option</legend>
      <div>
        <input class="go-form__checkbox" id="disabled-checkbox-1" type="checkbox" checked>
        <label for="disabled-checkbox-1" class="go-form__label go-form__label--inline">
          Option #1
        </label>
      </div>
      <div>
        <input class="go-form__checkbox" id="disabled-checkbox-2" type="checkbox">
        <label for="disabled-checkbox-2" class="go-form__label go-form__label--inline">
          Option #2
        </label>
      </div>
    </fieldset>
    <fieldset class="go-form__fieldset go-form__fieldset--error go-form__fieldset--no-margin">
      <legend class="go-form__legend">Select a Error Option</legend>
      <div>
        <input class="go-form__checkbox" id="error-checkbox-1" type="checkbox" checked>
        <label for="error-checkbox-1" class="go-form__label go-form__label--inline">
          Option #1
        </label>
      </div>
      <div>
        <input class="go-form__checkbox" id="error-checkbox-2" type="checkbox">
        <label for="error-checkbox-2" class="go-form__label go-form__label--inline">
          Option #2
        </label>
        <p class="go-hint go-hint--error">
          <span class="go-hint__status">Error:</span>
          This input is required. Please select an option to proceed.
        </p>
      </div>
    </fieldset>
  </form>
  `;
}
