import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

declare var $: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title: 'My first AGM project';
  lat: 80.250997;
  lng: 13.0527983;
  constructor() { }

  ngOnInit() {
  }

}
