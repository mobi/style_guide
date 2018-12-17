import { Component, Input } from '@angular/core';
 
@Component({
  selector: 'go-icon',
  styleUrls: ['./icon.component.scss'],
  templateUrl: './icon.component.html'
})

export class IconComponent {
  @Input() icon: string;
  @Input() classes: string[];

  formatClasses() {
    let classList = '';

    if (this.classes) {
      this.classes.forEach(i => {
        classList = classList + ' ' + i;
      });
    }

    return classList;
  }
}