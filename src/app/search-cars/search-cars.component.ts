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
  currentSearch: any;
  selectedDay: string = '';
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedDay = event.target.value;
  }
  onChanges(): void {
    this.currentSearch = this.cars.find(x => x.make === this.cars.make);
    console.log(this.currentSearch);
  }
  ngOnInit(): void {
    this.http
      .get(`https://radiant-sierra-38985.herokuapp.com/api/cars`)
      .subscribe(response => this.cars = response);
      }
  }
