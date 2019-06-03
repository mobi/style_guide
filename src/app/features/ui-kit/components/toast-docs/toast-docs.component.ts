import { Component, OnInit } from '@angular/core';
import { GoToasterService } from '@tangoe/goponents';

@Component({
  selector: 'app-toast-docs',
  templateUrl: './toast-docs.component.html'
})
export class ToastDocsComponent implements OnInit {

  showDismissToast = true;

  pageTitle = "Toasts";

  componentBindings = `
  @Input() dismissable: boolean = false;
  @Input() header: string;
  @Input() message: string;
  @Input() type: string;

  @Output() handleDismiss = new EventEmitter();
  `;

  basic_html = `
  <go-toast header="Success!" message="The thing you did saved successfully." type="positive"></go-toast>
  <go-toast header="Hey!" message="Did you know that this is pretty cool?"></go-toast>
  <go-toast header="Oh No!" message="The thing you did didn't work right." type="negative"></go-toast>
  `;

  dismiss_html = `
  <go-toast *ngIf="showDismissToast"
            header="Heads Up!"
            message="We use cookies and stuff, so watch out.  You can dismiss me."
            [dismissable]="true"
            (handleDismiss)="dismissed()"></go-toast>
  `;

  dismiss_ts = `
  showDismissToast = true;

  dismissed() {
    this.showDismissToast = false;
  }
  `;

  toaster_ts = `
  import { GoToasterService } from '@tangoe/goponents';

  constructor(private toasterService: GoToasterService) { }

  this.toasterService.toastSuccess({ message: 'You clicked the button!' });
  `;

  toaster_app_ts = `
  import { GoToasterService } from '@tangoe/goponents';

  NgModule({
    imports: [
      GoToasterModule
    ]
  });
  `;

  toaster_app_html = `
  <go-toaster></go-toaster>
  `;

  constructor(private toasterService: GoToasterService) { }

  ngOnInit() {
  }

  dismissed() {
    this.showDismissToast = false;
    this.toasterService.toastInfo({ message: 'Dismissed Item' });

    setTimeout(() => {
      this.showDismissToast = true;
    }, 3000);
  }

  sendToast() {
    this.toasterService.toastSuccess({ message: 'You clicked the button!' });
  }

}
