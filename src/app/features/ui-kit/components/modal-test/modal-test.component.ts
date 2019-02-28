import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-test',
  templateUrl: './modal-test.component.html',
  styleUrls: ['./modal-test.component.scss']
})
export class ModalTestComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
