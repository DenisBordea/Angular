import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";
import { LogService } from "../services/log.service";

@Component({
    selector: 'g-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {

    constructor(private _logService: LogService) {
    }

    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter <string> = new EventEmitter <string>();

    ngOnChanges(): void{
        this.starWidth = this.rating * 86/5;
    }

    onClick(): void {
        const message = `The rating ${this.rating} was clicked!`;
        this.ratingClicked.emit(message);
        this._logService.logRatingEvent(message);
    }
}
