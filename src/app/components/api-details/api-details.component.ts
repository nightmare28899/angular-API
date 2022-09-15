import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-api-details',
  templateUrl: './api-details.component.html',
  styleUrls: ['./api-details.component.css'],
})
export class ApiDetailsComponent implements OnInit {
  details: any = [];
  name: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiServiceService
  ) {}

  ngOnInit(): void {
    this.name = this.activatedRoute.snapshot.params['name'];
    this.apiService.getCharacterByName(this.name).subscribe(result => {
      this.details = result;
    });
  }


}
