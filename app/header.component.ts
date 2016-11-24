import {Component} from 'angular2/core';
import {ControlsComponent} from './controls.component';
import {AuthenticationService} from './authentication.service';


@Component({
    selector: 'app-head',
    templateUrl: 'app/views/header.component.html',
    directives:[ControlsComponent],
    providers: [AuthenticationService]

})

export class HeaderComponent{
    LoginName;
    constructor(
        private _service:AuthenticationService){
           var userdetails = localStorage.getItem("user"); 
           var user = JSON.parse(userdetails);
           console.log(user.username);
            this.LoginName = user.username;
            
        }

    ngOnInit(){
        this._service.checkCredentials();
    }

    logout() {
        this._service.logout();
    }
}