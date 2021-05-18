import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-individual-car',
  templateUrl: './individual-car.component.html',
  styleUrls: ['./individual-car.component.css']
})
export class IndividualCarComponent implements OnInit {
  inventory: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        let id = parseInt(params.get('id'));
        this.http
          .get(`https://radiant-sierra-38985.herokuapp.com/api/inventory/${id}`)
          .subscribe(response => this.inventory = response);
      });
  }

}
