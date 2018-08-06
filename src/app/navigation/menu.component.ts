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

  $(function () {
    $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
    $('.tree li ul > li').hide();
      $('.tree li.parent_li > span').on('click', function (e) {
        const children = $(this).parent('li.parent_li').find(' > ul > li');
        if (children.is(':visible')) {
            children.hide('fast');
            $(this).attr('title', 'Expand this branch').find(' > i').addClass('fa-chevron-right').removeClass('fa-chevron-down');

        } else {
            children.show('fast');
            $(this).attr('title', 'Collapse this branch').find(' > i').addClass('fa-chevron-down').removeClass('fa-chevron-right');
               // $(".tree-menu-list ul").toggle("collapse");
        }
        e.stopPropagation();
      });
      });
  }

}
export class NgbdTabsetBasic { }

export class NgbdAccordionStatic {
}
