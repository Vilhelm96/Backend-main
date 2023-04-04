import {inject, TestBed} from '@angular/core/testing';
import {PlayerComponent} from './player.component';
import {PlayerService} from '../../shared/services/player.service';


describe('PlayerIsShown', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PlayerComponent]
        });
    });

    it('should be shown', inject([PlayerComponent], (service: PlayerService) => {
        expect(service).toBeTruthy();
    }));
});
