import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transporter-facility-details',
  templateUrl: './transporter-facility-details.component.html',
  styleUrls: ['./transporter-facility-details.component.scss']
})
export class TransporterFacilityDetailsComponent implements OnInit {

  @Input() facilityDetails;

  constructor() { }

  ngOnInit() {
  }

}
