import { Component, OnInit } from '@angular/core';
import { GoogleService } from '../google.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [GoogleService]
})
export class MapComponent implements OnInit {
  lat: number = 44.4212031;
  lng: number = 26.0914645;
  zoom: number = 14;
  query: string = '';
  queryData = [];

  constructor(private connect: GoogleService) { }

  getGoogleLocation(query){
    var clearQuery = this.query.replace(/\s+/g, '+').toLowerCase();
      console.log(clearQuery);
    if (query !== undefined || query !== null) {
      this.connect.queryGoogle(clearQuery).subscribe(data => {
        this.queryData = data['results'];
        console.log(this.queryData);
      if (this.queryData[0].geometry.location.lat !== undefined ) {

        this.lat = this.queryData[0].geometry.location.lat;
        this.lng = this.queryData[0].geometry.location.lng;
        this.zoom = 12;

      } else {
        this.lat = 44.4212031;
        this.lng = 26.0914645;
      }
    });
    }
  }

  ngOnInit() {

  }
}
