import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-episodes-details',
  templateUrl: './episodes-details.component.html',
  styleUrls: ['./episodes-details.component.css']
})
export class EpisodesDetailsComponent implements OnInit {

  id: number = 0;
  characteres: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.apiService.getEpisodeById(this.id).subscribe((data: any) => {
      /* console.log(data.characters); */
      for (let i = 0; i < data.characters.length; i++) {
        /* console.log(data.characters[i]); */
        this.apiService.getCharacterByUrl(data.characters[i]).subscribe((data: any) => {
          this.characteres.push(data);
        });
      }
    });
  }
}
