import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import { UrlSet } from '../../../url';

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
  url = UrlSet.url;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  selectCondition (event: any) {
    this.selectedCondition = event.target.value;
    if (this.selectedCondition !== "None") {
      console.log(this.filteredList);
      console.log(this.masterList);
      console.log(this.masterList[0].new.toString());
      console.log(this.selectedCondition);
      this.filteredList = this.masterList.filter(i => i.new.toString() === this.selectedCondition);
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
          .get(`${this.url}/inventory/search/${id}`)
          .subscribe(response => {
            this.masterList = response;
            this.filteredList = this.masterList;
          });
        this.http
          .get(`${this.url}/cars/${id}`)
          .subscribe(response => this.cars = response);
      });
  }
}

