import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-api-card',
  templateUrl: './api-card.component.html',
  styleUrls: ['./api-card.component.css'],
})
export class ApiCardComponent implements OnInit {

  @Input('character') character: any;
  constructor() {}

  ngOnInit(): void {
  }
}
