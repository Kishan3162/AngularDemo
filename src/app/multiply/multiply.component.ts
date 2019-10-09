import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.css']
})
export class MultiplyComponent implements OnInit {

  f1: number;
  f2: number;
  result: number;
  constructor() { }

  ngOnInit() {
  }

  calculate() {
    this.result = this.f1 * this.f2;
  }
}
