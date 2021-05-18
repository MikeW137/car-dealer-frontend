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
  inventory: any;
  cars: any;
  //booleanDisplay: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  // isTrue(isNew){
  //   if (isNew){
  //     return this.booleanDisplay = 'New';
  //   }
  //   else {
  //     return this.booleanDisplay = 'Used';
  //   }
  // }
  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        let id = parseInt(params.get('id'));
        this.http
          .get(`https://radiant-sierra-38985.herokuapp.com/api/inventory/search/${id}`)
          .subscribe(response => this.inventory = response);
        this.http
          .get(`https://radiant-sierra-38985.herokuapp.com/api/cars/${id}`)
          .subscribe(response => this.cars = response);
      });
  }

}
