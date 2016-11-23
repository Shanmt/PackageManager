import {Component} from 'angular2/core';
import {AuthenticationService} from './authentication.service';


@Component({
    selector: 'app-head',
    templateUrl: 'app/views/header.component.html',
    providers: [AuthenticationService]

})

export class HeaderComponent{
    constructor(
        private _service:AuthenticationService){}

    ngOnInit(){
        this._service.checkCredentials();
    }

    logout() {
        this._service.logout();
    }
}