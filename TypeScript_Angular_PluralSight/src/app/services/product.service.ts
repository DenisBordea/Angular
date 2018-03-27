import { Injectable } from '@angular/core';
import { ICar } from '../products/car';

@Injectable()
export class ProductService {
    getProducts(): ICar[] {

        const cars: ICar[] = [
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
        return cars;
    }

}
