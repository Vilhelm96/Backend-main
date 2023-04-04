import {Component, isDevMode, OnInit} from '@angular/core';
import {SessionService} from './shared/services/session.service';
import {MaintenanceService} from './shared/services/maintenance.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(
        private sessionService: SessionService,
        private maintenanceService: MaintenanceService,
    ) {

    }

    ngOnInit(): void {
        // this.maintenanceService.fixProductsDurationAndTracks();
    }

    prepareSession() {
        this.sessionService.addConnectedListener(() => {
            this.sessionConnected();
        });
        if (isDevMode()) {
            this.sessionService.connect('ws://manage.snabbs.local:23000/ws');
        } else {
            if ((location.protocol !== 'https:')) {
                this.sessionService.connect('ws:/presentation.softuza.com:22000/ws');
            } else {
                this.sessionService.connect('wss://presentation.softuza.com:23000/ws');
            }
        }
    }

    sessionConnected() {

    }

}
