import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {

  pageTitle: string = "Colors";

  colorVariables = `
  // Light Theme Variables
  $theme-light-app-bg           // Use as the app background
  $theme-light-bg               // Used as the base background for all components
  $theme-light-bg-active        // Used when the background needs an active state
  $theme-light-bg-hover         // Used when the background needs a hover state
  $theme-light-color            // Used for the font color
  $theme-light-color-hover      // Used when the font color needs a hover state
  $theme-light-border           // Used to apply a border to an element

  // Brand Color Variables
  $brand-color                  // Use this to apply the brand color
  $brand-color-active           // Used when the brand color needs an active state
  $brand-color-hover            // Used when the brand color needs a hover state
  $brand-color-gradient         // Use this to apply the brand color as a gradient.
                                // Should only be used as a small accent

  // UI Color Negative (Error)
  $ui-color-negative            // Use this to apply the negative (error) state color
  $ui-color-negative-active     // Used when the ui color needs an active state
  $ui-color-negative-hover      // Used when the ui color needs a hover state
  $ui-color-negative-gradient   // Use this to apply the brand color as a gradient.
                                // Should only be used as a small accent

  // UI Color Positive (Success)
  $ui-color-positive            // Use this to apply the positive (success) state color
  $ui-color-positive-active     // Used when the ui color needs an active state
  $ui-color-positive-hover      // Used when the ui color needs a hover state
  $ui-color-positive-gradient   // Use this to apply the brand color as a gradient.
                                // Should only be used as a small accent

  // UI Color Neutral (Info)
  $ui-color-neutral             // Use this to apply the neutral (info) state color
  $ui-color-neutral-active      // Used when the ui color needs an active state
  $ui-color-neutral-hover       // Used when the ui color needs a hover state
  $ui-color-neutral-gradient    // Use this to apply the brand color as a gradient.
                                // Should only be used as a small accent
  `;

  constructor() { }

  ngOnInit() {
  }

}
