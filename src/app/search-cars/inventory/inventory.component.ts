import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {SearchCarsComponent} from '../search-cars.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  masterList: any;
  cars: any;
  selectedCondition: any;
  filteredList: any;



  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  selectCondition (event: any) {
    this.selectedCondition = event.target.value;
    if (this.selectedCondition !== "None") {
      this.filteredList = this.masterList.filter(i => i.price === this.selectedCondition);
    }
    else {
      this.filteredList = this.masterList;
    }
  }
  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        let id = parseInt(params.get('id'));
        this.http
          .get(`https://radiant-sierra-38985.herokuapp.com/api/inventory/search/${id}`)
          .subscribe(response => {
            this.masterList = response;
            this.filteredList = this.masterList;
          });
        this.http
          .get(`https://radiant-sierra-38985.herokuapp.com/api/cars/${id}`)
          .subscribe(response => this.cars = response);
      });
  }
}

