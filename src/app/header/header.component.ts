import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
    });
    $('#sidebarCollapse').click(function() {
      $('#content').toggleClass('col-md-12');
      $('#content').toggleClass('col-md-10');

    });
  }

}
