import { Component } from "@angular/core";
import {ICar} from "./car";

@Component({
    selector: 'carlist',
    templateUrl: './car-list.component.html'
})

export class CarListComponent{
    imageWidth: number = 50;
    raitingText: string;   

    _carFilter: string;
    get carFilter(): string {
        return this._carFilter;
    }
    set carFilter(value: string){
        this._carFilter = value;
        this.filteredCars = this.carFilter ? this.performFilter(this.carFilter) : this.cars;
    }

    filteredCars: ICar[];

    cars: ICar[] = [
        {
        "carId": 1,
        "carName": "Porsche356",
        "carNoOfKm": 150000,
        "carPrice": 450000,
        "imageUrl": "./assets/images/oldcar.jpg",
        "starRating": 5
    },
    {
        "carId": 2,
        "carName": "Porsche",
        "carNoOfKm": 200000,
        "carPrice": 550000,
        "imageUrl": "/assets/images/porche.jpg",
        "starRating": 3.5
    },
    {
        "carId": 3,
        "carName": "Mercedes-Benz",
        "carNoOfKm": 250000,
        "carPrice": 800000,
        "imageUrl": "/assets/images/benz.jpg",
        "starRating": 2.5
    }];

constructor(){
    this.filteredCars = this.cars;
    
}

    performFilter(filterBy: string): ICar[]{
        return this.cars.filter((cars: ICar) => cars.carName.toLocaleUpperCase().indexOf(filterBy.toLocaleUpperCase()) !== -1);
    }

    onRaitingClicked(message: string): void{
        this.raitingText = message;
    }
}
