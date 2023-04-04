import {Model} from '../model';

export class Product extends Model {
    name: string;
    artist: string;
    producer: string;
    cover: string;
    price: number;
    duration: number;
    tracks: number = 0;
    description: string;
    createdAt: string;
    rowSpan: number;
    columnSpan: number;
    year: number;

    numberOfRatings: number = 0;
    totalRatings: number = 0;
    discount: any;
    ratingCalc: any = 0;
    durationMIn: any = 0;

    constructor(document = null) {
        super();
        if (document != null) {
            this.fromDocument(document);
        }
    }

    fromDocument(document) {
        this.id = document.id;
        this.name = document.data().name;
        this.producer = document.data().producer;
        this.artist = document.data().artist;
        this.price = parseInt(document.data().price, 10);
        this.duration = document.data().duration;
        this.cover = document.data().cover;
        this.description = document.data().description;
        this.tracks = document.data().tracks;
        this.createdAt = document.data().createdAt != null ? document.data().createdAt.toDate().toLocaleString() : '';
        this.year = document.data().year;
        this.columnSpan = document.data().columnSpan === undefined ? 1 : document.data().columnSpan;
        this.rowSpan = document.data().rowSpan === undefined ? 1 : document.data().rowSpan;
        this.totalRatings = parseInt(document.data().totalRatings, 10);
        this.numberOfRatings = parseInt(document.data().numberOfRatings, 10);


        if (this.numberOfRatings !== undefined && this.numberOfRatings !== 0) {
            this.ratingCalc = Math.floor(this.totalRatings / this.numberOfRatings);
        }
        if (this.duration !== undefined) {
            this.durationMIn = Math.floor(this.duration / 60);
        }
    }
}
