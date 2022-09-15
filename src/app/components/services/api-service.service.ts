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

  getCharacterList(): any {
    return this.http
      .get<any>(
        `${environment.baseUrlAPI}/character`,
        this.httpOptions
      )
      .pipe(
        map((data: any) => data.results),
        retry(1)
      );
  }

  getCharacterByName(name: string): Observable<CharacterDetails> {
    return this.http
      .get<any>(
        `${environment.baseUrlAPI}/character/?name=${name}`,
        this.httpOptions
      )
      .pipe(
        map((data: any) => data.results),
        retry(1)
      );
  }

  getElementsById(id: number): Observable<CharacterDetails> {
    return this.http
      .get<any>(
        `${environment.baseUrlAPI}/character/${id}`,
        this.httpOptions
      )
      .pipe(
        map((data: any) => data),
        retry(1)
      );
  }

  getLocation(url: string): Observable<CharacterDetails> {
    return this.http
      .get<any>(
        `${url}`,
        this.httpOptions
      )
      .pipe(
        map((data: any) => data),
        retry(1)
      );
  }

  getCharacterByUrl(url: any): Observable<CharacterDetails> {
    return this.http
      .get<any>(
        `${url}`,
        this.httpOptions
      )
      .pipe(
        map((data: any) => data),
        retry(1)
      );
  }

  getPage(numPage: number): Observable<CharacterDetails> {
    return this.http
      .get<any>(
        `${environment.baseUrlAPI}/character/?page=${numPage}`,
        this.httpOptions
      )
      .pipe(
        map((data: any) => data.results),
        retry(1)
      );
  }

  getEpisodeList(): Observable<CharacterDetails> {
    return this.http
      .get<any>(
        `${environment.baseUrlAPI}/episode`,
        this.httpOptions
      )
      .pipe(
        map((data: any) => data.results),
        retry(1)
      );
  }

  getEpisodeById(id: number): Observable<CharacterDetails> {
    return this.http
      .get<any>(
        `${environment.baseUrlAPI}/episode/${id}`,
        this.httpOptions
      )
      .pipe(
        map((data: any) => data),
        retry(1)
      );
  }
}
