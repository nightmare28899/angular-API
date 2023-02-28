import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.css']
})
export class EpisodesListComponent implements OnInit {
  episodes: any[] = [];

  constructor(private apiServ: ApiServiceService) { }

  ngOnInit(): void {
    this.apiServ.getEpisodeList().subscribe((data: any) => {
      this.episodes = data;
      console.log(this.episodes);
    });
  }

}
