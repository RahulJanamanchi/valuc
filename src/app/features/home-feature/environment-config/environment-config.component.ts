import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-environment-config',
  templateUrl: './environment-config.component.html',
  styleUrls: ['./environment-config.component.scss']
})
export class EnvironmentConfigComponent implements OnInit {
  environment: any;
  selected: string;
  environmentSettingsForm = new FormGroup({
    apiEndPoint: new FormControl('')
  });

  onChange(e) {
    console.log(Object.values(environment.apis));
    Object.keys(environment.apis).forEach(key => {
      environment.apis[key] = environment[e][key];
    });
    console.log(Object.values(environment.apis));
  }

  goBack() {
    this.route.navigateByUrl('/home');
  }

  constructor(private route: Router) {
    this.environment = environment;
  }

  ngOnInit() {
  }

}
