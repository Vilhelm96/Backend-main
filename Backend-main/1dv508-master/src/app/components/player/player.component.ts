import {Component, OnDestroy, OnInit} from '@angular/core';
import {PlayerService} from '../../shared/services/player.service';
import {EventsService} from '../../shared/services/events.service';
import {slideUpAnimation} from '../../shared/animations/slide-up-animation';


@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss'],
    animations: [slideUpAnimation]
})

export class PlayerComponent implements OnInit, OnDestroy {

    visible = false;

    constructor(
        private playerService: PlayerService,
        private eventsService: EventsService,
    ) {

    }

    ngOnInit(): void {
        this.registerPlayerShowEvent();
    }

    ngOnDestroy(): void {

    }

    private registerPlayerShowEvent() {
        this.eventsService.registerEvent('PLAYER-SHOW', this, () => {
            this.show();
        });
    }

    getShowState() {
        return this.visible ? 'in' : 'out';
    }

    show() {
        this.visible = true;
    }

    close() {
        this.visible = false;
        this.playerService.stop();
    }

    toggle() {
        if (!this.playerService.isPlaying()) {
            this.playerService.play();
        } else {
            this.playerService.pause();
        }
    }

    pause() {
        this.playerService.pause();
    }

    volume() {
        if (this.playerService.getVolume() === 0.0) {
            this.playerService.setVolume(1.0);
        } else {
            this.playerService.setVolume(0);
        }
    }
}

