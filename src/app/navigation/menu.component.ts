import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.select-period').click(function() {
      $('.period-selection').toggleClass('show-period');
      $('.popover-child').css('display', 'none');
  });
  }

}
