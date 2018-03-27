import { Injectable } from "@angular/core";
import { LogEvent } from "../models/logEvent";

@Injectable()
export class LogService {
    logAppend = [];

    logCarFilterEvent(keyword, nrOfResults): void {
        const event = new LogEvent();
        event.eventType = 'carFilter';
        event.keyword = keyword;
        event.numberOfResults = nrOfResults;
        event.eventDate = new Date().toLocaleString();
        this.logAppend.push(event);
        console.log(this.logAppend);
        this.sendToServer();
    }

    logRatingEvent(message): void {
        const event = new LogEvent();
        event.eventType = 'rating';
        event.message = message;
        event.eventDate = new Date().toLocaleString();
        this.logAppend.push(event);
        console.log(this.logAppend);
        this.sendToServer();
    }

    private sendToServer(): void {
        if (this.logAppend.length === 10) {
            console.log('Sending batch data to server ...');
            this.logAppend = [];
        }
    }
}
