import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() size = 'medium';
  @Input() variant = 'glossy';
  @Output() click = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit() {
  }

}
