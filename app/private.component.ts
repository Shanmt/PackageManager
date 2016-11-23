import {Component} from 'angular2/core';
import {HeaderComponent} from './header.component';
import {FooterComponent} from './footer.component';
import {AuthenticationService} from './authentication.service';


@Component({
    selector: 'login-form',
    templateUrl: 'app/views/home.component.html',
    directives: [HeaderComponent,FooterComponent],
    providers: [AuthenticationService]
})

export class PrivateComponent {

    constructor(
        private _service:AuthenticationService){}

    ngOnInit(){
        this._service.checkCredentials();
    }

    logout() {
        this._service.logout();
    }
}