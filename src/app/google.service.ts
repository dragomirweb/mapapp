import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class GoogleService {

  constructor(private http: Http) { }
  queryGoogle(query){
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + query + '&components=country:RO&key=AIzaSyA5IIU55xvBp2wPlBsdyoS3ElEtG9qKcNs').map(
      (res) => res.json()
    );
  }
}
