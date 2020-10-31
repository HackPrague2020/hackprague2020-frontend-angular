import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lemonade-diagram',
  templateUrl: './lemonade-diagram.component.html',
  styleUrls: ['./lemonade-diagram.component.css']
})
export class LemonadeDiagramComponent implements OnInit {

  symbol= 'TSLA';
  manufacturingCost = 123;

  constructor() { }

  ngOnInit(): void {
  }

}
