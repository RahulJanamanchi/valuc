import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() src: string;
  @Input() color: string;
  @Input() variant: string;
  @Input() width = 24;
  @Input() height = 24;

  constructor() { }

  ngOnInit() {
  }

  getSrc() {
    return `assets/icons/${this.src}.svg`;
  }

  getStyle() {
    return {
      color: this.color || 'currentColor',
      fill: 'currentColor',
      width: `${this.width}px`,
      height: `${this.height}px`
    };
  }

}
