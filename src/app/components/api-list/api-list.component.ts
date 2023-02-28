import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { filter, take } from 'rxjs';
import { ApiServiceService } from '../services/api-service.service';
import { DOCUMENT } from '@angular/common';
import { CharacterDetails } from '../interfaces/characters-details.model';
import { NavigationEnd, ParamMap } from '@angular/router';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.css'],
})
export class ApiListComponent implements OnInit {
  showGoUpButton = false;
  private pageNum: number = 1;
  private hideScrollHeight = 200;
  private showScrollHeight = 500;
  characters: CharacterDetails[] = [];
  charactersFilter: any[] = [];
  origins: any[] = [];
  count: number = 1;
  showFiller = false;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private apiService: ApiServiceService
  ) {}

  ngOnInit(): void {
    this.apiService.getCharacterList().subscribe((characterList: any) => {
      this.characters = characterList;
      this.charactersFilter = characterList;
      for (let i = 0; i < this.characters.length; i++) {
        this.characters[i].origin.name
        this.origins.push(this.characters[i].origin.name);
      }
    });
  }

  filterCharacters(charactersFilterName: string) {
    this.charactersFilter = this.characters.filter(
      (person) =>
        person.name
          .toLocaleLowerCase()
          .includes(charactersFilterName.toLocaleLowerCase()) ||
        person.status
          .toLocaleLowerCase()
          .includes(charactersFilterName.toLocaleLowerCase()) ||
        person.species
          .toLocaleLowerCase()
          .includes(charactersFilterName.toLocaleLowerCase()) ||
        person.type
          .toLocaleLowerCase()
          .includes(charactersFilterName.toLocaleLowerCase()) ||
        person.gender
          .toLocaleLowerCase()
          .includes(charactersFilterName.toLocaleLowerCase())
    );
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

  loadNext() {
    this.count++;
    this.apiService.setPageObservable(this.count);
    this.apiService.currentPageObservable.subscribe((page) => {
      this.count = page;
      this.apiService.getPage(this.count).subscribe((characterList: any) => {
       this.charactersFilter = [ ...characterList];
       this.characters = [ ...characterList];
      });
    });
    this.onScrollTop();
  }

  loadPrevious() {
    if (this.count > 1) {
      this.count--;
      this.apiService.setPageObservable(this.count);
      this.apiService.currentPageObservable.subscribe((page) => {
        this.count = page;
        this.apiService.getPage(this.count).subscribe((characterList: any) => {
          this.charactersFilter = [ ...characterList];
          this.characters = [ ...characterList];
        });
      });
    }
    this.onScrollTop();
  }
}
