import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lemonade-diagram',
  templateUrl: './lemonade-diagram.component.html',
  styleUrls: ['./lemonade-diagram.component.css']
})
export class LemonadeDiagramComponent implements OnInit {

  symbol= 'TSLA';
  manufacturingCost = 127;

  constructor() { }

  ngOnInit(): void {
  }

}
