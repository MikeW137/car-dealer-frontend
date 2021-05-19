import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-search-cars',
  templateUrl: './search-cars.component.html',
  styleUrls: ['./search-cars.component.css']
})
export class SearchCarsComponent implements OnInit {
  masterList: any;
  filteredList: any;
  constructor(private http: HttpClient) { }
  selectedMake: string = '';

  filterListCall(): void {
    this.http
      .get(`https://radiant-sierra-38985.herokuapp.com/api/cars`)
      .subscribe(response => this.filteredList = response);
  }
  // selectChangeHandler (event: any) {
  //   this.selectedMake = event.target.value;
  // }
  // filterMake(make: any) {
  //   this.http
  //     .get(`https://radiant-sierra-38985.herokuapp.com/api/cars`).pipe(map(filteredList => filteredList.filter(i => i.make === make)))
  //     .subscribe(response => this.filteredList = response);
  // }
  ngOnInit(): void {
    this.http
      .get(`https://radiant-sierra-38985.herokuapp.com/api/cars`)
      .subscribe(response => this.masterList = response);
  }
}

