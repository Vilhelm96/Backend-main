import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {MaterialModule} from './material.module';
import {FirebaseModule} from './firebase.module';
import {ComponentsModule} from './components.module';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthenticationService} from './shared/services/authentication.service';
import {RegisterComponent} from './components/register/register.component';
import {LogoutComponent} from './components/logout/logout.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavbarComponent} from './components/navbar/navbar.component';
import {UserService} from './shared/services/user/user.service';
import {BasketService} from './shared/services/basket/basket.service';
import {LocalStorageService} from './shared/services/local-storage.service';
import {PlayerService} from './shared/services/player.service';
import {EventsService} from './shared/services/events.service';
import {EmailService} from './shared/services/email.service';
import {PlayerComponent} from './components/player/player.component';
import {SessionService} from './shared/services/session.service';
import {WindowRef} from './shared/directives/WindowRef';
import {MaintenanceService} from './shared/services/maintenance.service';
import {HttpClientModule} from '@angular/common/http';
import {SoundVisualizerComponent} from './components/sound-visualizer/sound-visualizer.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CommonModule,
        FirebaseModule,
        MaterialModule,
        ComponentsModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        RegisterComponent,
        LogoutComponent,
        PlayerComponent,
        SoundVisualizerComponent,
    ],
    providers: [
        UserService,
        AuthenticationService,
        LocalStorageService,
        BasketService,
        PlayerService,
        EventsService,
        EmailService,
        SessionService,
        MaintenanceService,
        WindowRef,
    ],
    bootstrap: [
        AppComponent,
    ],
    entryComponents: [
        LoginComponent,
        RegisterComponent,
        LogoutComponent,
    ]
})
export class AppModule {
}
