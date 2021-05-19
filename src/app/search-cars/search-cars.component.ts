import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search-cars',
  templateUrl: './search-cars.component.html',
  styleUrls: ['./search-cars.component.css']
})
export class SearchCarsComponent implements OnInit {
  cars: any;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http
      .get(`https://radiant-sierra-38985.herokuapp.com/api/cars`)
      .subscribe(response => this.cars = response);
    this.printCars();

  }
  printCars(): void {
    console.log(this.cars);
  }
  }

