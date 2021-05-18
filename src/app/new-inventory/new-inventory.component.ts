import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-new-inventory',
  templateUrl: './new-inventory.component.html',
  styleUrls: ['./new-inventory.component.css']
})
export class NewInventoryComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http
      .get(`https://radiant-sierra-38985.herokuapp.com/api/inventory`)
      .subscribe(response => {
        console.log(response);
      });
  }

}
