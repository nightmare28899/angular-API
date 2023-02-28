import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ApiServiceService } from '../services/api-service.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
})
export class CharacterDetailsComponent implements OnInit {
  id: number = 0;
  details: any[] = [];
  location: any;
  resid: any[] = [];
  imageResidents: any[] = [];
  imageNames: any[] = [];
  imageStatus: any[] = [];
  imageGender: any[] = [];
  imageSpecies: any[] = [];
  showGoUpButton = false;
  private hideScrollHeight = 200;
  private showScrollHeight = 500;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiServiceService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.apiService.getElementsById(this.id).subscribe((result) => {
      this.details.push(result);
      this.location = this.details[0].location.url;
      this.apiService.getLocation(this.location).subscribe((result) => {
        this.resid.push(result);
        for (let i = 0; i < 50; i++) {
          this.apiService
            .getCharacterByUrl(this.resid[0].residents[i])
            .subscribe((result) => {
              this.imageResidents.push(result.image);
              this.imageNames.push(result.name);
              this.imageStatus.push(result.status);
              this.imageGender.push(result.gender);
              this.imageSpecies.push(result.species);
            });
        }
      });
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(e: any) {
    const yOffSet = window.pageYOffset;
    if (
      (yOffSet ||
        this.document.documentElement.scrollTop ||
        this.document.body.scrollTop) > this.showScrollHeight
    ) {
      this.showGoUpButton = true;
    } else if (
      this.showGoUpButton &&
      (yOffSet ||
        this.document.documentElement.scrollTop ||
        this.document.body.scrollTop) < this.hideScrollHeight
    ) {
      this.showGoUpButton = false;
    }
  }

  onScrollTop(): void {
    this.document.body.scrollTop = 0;
    this.document.documentElement.scrollTop = 0;
  }
}
