import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootStoreState, AuthActions } from '../../../root-store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {}

  login(userType) {
    // this.store$.dispatch(new AuthActions.LoginRequestAction({
    //   credentials: { userName: userType, userType, password: '123' }
    // }));
  }

  styleBackGround():Object{
    let styles={
      'background':'white',
      'background-image':'linear-gradient(to bottom, rgba(154,204,157,1), rgba(252,0,0,0)),url("~/assets/icons/icon-72x72.png")',
      'background-repeat': 'no-repeat',
      'background-position':'center',
      'background-attachment': 'fixed',
      'background-size':'contain'
    }
    return styles;
  }

}
