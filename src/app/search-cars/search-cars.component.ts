import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UrlSet} from '../../url';

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
  url = UrlSet.url;

  selectChangeHandler (event: any) {
    this.selectedMake = event.target.value;
    if (this.selectedMake !== "None") {
      this.filteredList = this.masterList.filter(i => i.make === this.selectedMake);
    }
    else {
      this.filteredList = this.masterList;
    }
  }
  ngOnInit(): void {
    this.http
      .get(`${this.url}/cars`)
      .subscribe(response => {
        this.masterList = response;
        this.filteredList = this.masterList;
      });
  }
}
