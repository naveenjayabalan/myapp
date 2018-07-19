import { Component, OnInit } from '@angular/core';
import { Button } from 'protractor';
import { AgmCoreModule } from '@agm/core';
declare var $: any;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('button').click(function() {
      alert('test');
    });


  }

}
