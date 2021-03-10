import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-toaster-lib',
  template: `
    <p>
      my-toaster-lib works!
    </p>
  `,
  styles: [
  ]
})
export class MyToasterLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
