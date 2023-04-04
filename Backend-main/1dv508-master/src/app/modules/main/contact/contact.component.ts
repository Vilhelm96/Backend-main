import {Component, OnInit} from '@angular/core';
import {WindowRef} from '../../../shared/directives/WindowRef';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
    imageWidth = 300;

    constructor(
        private winRef: WindowRef,
        private router: Router,
    ) {

    }

    ngOnInit(): void {
    }


}


