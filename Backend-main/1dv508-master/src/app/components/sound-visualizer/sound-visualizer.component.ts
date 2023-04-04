import {Component} from '@angular/core';

import * as d3 from 'd3';
import * as p5 from 'p5';

@Component({
    selector: 'app-sound-visualizer',
    templateUrl: './sound-visualizer.component.html',
    styleUrls: ['./sound-visualizer.component.scss']
})
export class SoundVisualizerComponent {

    container = {width: 450, height: 450, id: 'p5-container'};

    constructor() {

    }


}
