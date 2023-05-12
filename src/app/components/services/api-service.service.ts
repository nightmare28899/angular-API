import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, retry } from 'rxjs';
import { CharacterDetails } from '../interfaces/characters-details.model';
import { BehaviorSubject, observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private pageObservable = new BehaviorSubject(1);
  currentPageObservable = this.pageObservable.asObservable();

  setPageObservable(numPage: number) {
    this.pageObservable.next(numPage);
  }

  nombre: any = '';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Acces-Control-Allow-Origin': '*',
      Accept: '*/*',
    }),
  };

  constructor(private http: HttpClient) {}

  getPages(): any {
    return this.http
      .get(`${environment.baseUrlAPI}`, this.httpOptions)
      .pipe(
        map((data: any) => data.info),
        retry(1)
      );
  }

  getCharacterList(): any {
    return this.http
      .get(`${environment.baseUrlAPI}`, this.httpOptions)
      .pipe(
        map((data: any) => data.results),
        retry(1)
      );
  }

  getCharacterByName(name: string): Observable<CharacterDetails> {
    return this.http
      .get(
        `${environment.baseUrlAPI}/?name=${name}`,
        this.httpOptions
      )
      .pipe(
        map((data: any) => data.results),
        retry(1)
      );
  }

  getElementsById(id: number): Observable<CharacterDetails> {
    return this.http
      .get(`${environment.baseUrlAPI}/${id}`, this.httpOptions)
      .pipe(
        map((data: any) => data),
        retry(1)
      );
  }

  getLocation(url: string): Observable<CharacterDetails> {
    return this.http.get(`${url}`, this.httpOptions).pipe(
      map((data: any) => data),
      retry(1)
    );
  }

  getCharacterByUrl(url: any): Observable<CharacterDetails> {
    return this.http.get(`${url}`, this.httpOptions).pipe(
      map((data: any) => data),
      retry(1)
    );
  }

  getPage(numPage: number): Observable<CharacterDetails> {
    return this.http
      .get(
        `${environment.baseUrlAPI}/?page=${numPage}`,
        this.httpOptions
      )
      .pipe(
        map((data: any) => data.results),
        retry(1)
      );
  }

  getEpisodeList(): Observable<CharacterDetails> {
    return this.http
      .get('https://rickandmortyapi.com/api/episode/', this.httpOptions)
      .pipe(
        map((data: any) => data.results),
        retry(1)
      );
  }

  getEpisodeById(id: number): Observable<CharacterDetails> {
    return this.http
      .get(`https://rickandmortyapi.com/api/episode/${id}`, this.httpOptions)
      .pipe(
        map((data: any) => data),
        retry(1)
      );
  }
}
