import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search-cars',
  templateUrl: './search-cars.component.html',
  styleUrls: ['./search-cars.component.css']
})
export class SearchCarsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http
      .get(`https://radiant-sierra-38985.herokuapp.com/api/inventory`)
      .subscribe(response => {
        console.log(response);
      });
  }

}
