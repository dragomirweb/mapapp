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
  zoom: number = 16;
  query: string = '';
  queryData = [];
  restaurants = 'Show Restaurants';
  schools = 'Show Schools';
  marker = [
	  {
		  geometry: {
        location: {
          lat: '',
          lng: ''
        }
      },
      name: ''
	  },
  ];

  clickedMarker(label: string, index: number) {
  console.log(`clicked the marker: ${label || index}`)
}

  constructor(private connect: GoogleService) { }

  getGoogleLocation(query){
    if (this.query !== ''){
      //make the query google query-friendly
      var clearQuery = this.query.replace(/\s+/g, '+').toLowerCase();
      if (query !== undefined || query !== null) {
        this.connect.queryGoogle(clearQuery).subscribe(data => {
          this.queryData = data['results'];
          console.log(this.queryData);
        if (this.queryData[0].geometry === undefined || this.queryData[0].geometry === null) {

            this.lat = 44.4212031;
            this.lng = 26.0914645;
            alert('Locatia nu a fost gasita');
        } else {
          this.lat = this.queryData[0].geometry.location.lat;
          this.lng = this.queryData[0].geometry.location.lng;
          this.zoom = 16;
          this.queryData = [];

        }
      });
      }
    } else {
      alert("Adresa goala");
    };
  };
  toggleRestaurants(lat, lng){
    if(this.restaurants === 'Show Restaurants'){
      var l = this.lat.toString();
      var ln = this.lng.toString();
      this.marker = [];
      this.connect.queryGoogleRestaurants(l, ln).subscribe(data => {
        this.queryData = data['results'];
        for (var i = 0; i < this.queryData.length; i++) {
        this.marker.push(this.queryData[i]);
        this.restaurants = "Hide Restaurants";
      }
      });
    } else if(this.restaurants === "Hide Restaurants") {
      this.restaurants = "Show Restaurants";
      this.marker = [
        {
          geometry: {
            location: {
              lat: '',
              lng: ''
            }
          },
          name: ''
        },
      ];
    }
  };

  toggleSchools(lat, lng){
    if(this.schools === 'Show Schools'){
      var l = this.lat.toString();
      var ln = this.lng.toString();
      this.marker = [];
      this.connect.queryGoogleSchools(l, ln).subscribe(data => {
        this.queryData = data['results'];
        for (var i = 0; i < this.queryData.length; i++) {
        this.marker.push(this.queryData[i]);
        this.schools = "Hide Schools";
      }
      });
    } else if(this.schools === "Hide Schools") {
      this.schools = "Show Schools";
      this.marker = [
        {
          geometry: {
            location: {
              lat: '',
              lng: ''
            }
          },
          name: ''
        },
      ];
    }
  };


  ngOnInit() {

  }
}
