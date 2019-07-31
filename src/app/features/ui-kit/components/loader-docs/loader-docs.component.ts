import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader-docs',
  templateUrl: './loader-docs.component.html',
  styleUrls: ['./loader-docs.component.scss']
})
export class LoaderDocsComponent implements OnInit {

  showLoader: boolean = true;

  pageTitle = 'Loader';

  componentBindings = `
  @Input() loaderSize: string = 'medium';
  @Input() loaderType: string = 'neutral';
  `;

  basicHtml = `
  <go-loader loaderSize="small" loaderType="negative"></go-loader>
  <go-loader></go-loader>
  <go-loader loaderSize="large" loaderType="positive"></go-loader>
  `;

  fadeHtml = `
  <go-loader *ngIf="showLoader"></go-loader>
  `;

  constructor() { }

  ngOnInit() {
  }

  toggleLoader(): void {
    this.showLoader = !this.showLoader;
  }
}
