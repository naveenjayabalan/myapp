import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public href = '';
  // url = 'http://localhost:4200/services';

  constructor(private router: Router) {}

  ngOnInit() {
    function test() {

   }
    if (this.href = this.router.url) {
      console.log(this.router.url);
      alert('tejhgbjhdbgjhdgbst');
     test();
    }

  }

}
