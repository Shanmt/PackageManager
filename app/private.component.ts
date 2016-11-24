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
    
    WorkSpace;
    Controls;
    constructor(
        private _service:AuthenticationService){
            this.WorkSpace = 'Display Screen';
            this.Controls = 'Controls';
        }

    ngOnInit(){
        this._service.checkCredentials();
    }

    logout() {
        this._service.logout();
    }
}