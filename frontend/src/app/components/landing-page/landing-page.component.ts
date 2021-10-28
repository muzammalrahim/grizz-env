import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  listing = [];
  constructor(
    private dataSvs: DataService,
  ) { }

  ngOnInit(): void {
    this.dataSvs.getListing().subscribe((resp) => {
      this.listing = resp;
    });
  }

}
