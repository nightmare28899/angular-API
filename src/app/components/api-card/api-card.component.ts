import { Component, OnInit, Input } from '@angular/core';
import { CharacterDetails } from '../interfaces/characters-details.model';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-api-card',
  templateUrl: './api-card.component.html',
  styleUrls: ['./api-card.component.css'],
})
export class ApiCardComponent implements OnInit {

  /* characterDetails: CharacterDetails = new CharacterDetails(); */
  @Input('character') character: any;
  constructor(private apiService: ApiServiceService) {}

  ngOnInit(): void {
  }
}
