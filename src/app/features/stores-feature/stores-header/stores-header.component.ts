import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-stores-header',
  templateUrl: './stores-header.component.html',
  styleUrls: ['./stores-header.component.scss']
})
export class StoresHeaderComponent implements OnInit {

  @Input() query: string;
  @Output() queryChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
