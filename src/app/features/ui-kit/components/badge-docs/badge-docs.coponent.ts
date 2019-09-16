import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-badge-docs',
  templateUrl: './badge-docs.component.html'
})
export class BadgeDocsComponent {
  componentBindings: string = `
  @Input() badgeData: string;
  @Input() badgeColor: string = 'neutral';
  @Input() displayData: boolean = true;
  `;

  iconBadge: string = `
  <go-badge badgeData="12">
    <go-icon icon="notifications"></go-icon>
  </go-badge>
  `;

  iconBadgePositive: string = `
  <go-badge badgeData="18" badgeColor="positive">
    <go-icon icon="info"></go-icon>
  </go-badge>
  `

  iconBadgeNegative: string = `
  <go-badge badgeData="18" badgeColor="negative">
    <go-icon icon="info"></go-icon>
  </go-badge>
  `

  iconBadgeDisplay: string = `
  <go-badge badgeData="really long text that we want to hide" [displayData]="false">
    <go-icon icon="notifications"></go-icon>
  </go-badge>
  `;

  pageTitle: string = 'Badge'
}
