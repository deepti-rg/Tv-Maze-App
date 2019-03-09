import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';
import { getRandomString } from 'selenium-webdriver/safari';
import {map} from 'rxjs/operators';
import { ICurrentShow } from './icurrent-show';
import { Observable } from 'rxjs';

interface ICurrentServiceShow {
  score: number,
  show: {
    id : string,
    image: {
      medium: string
    },
    language: string,
    name: string,
    rating: {
      average: number
    },
    summary: string,
    runtime: number 
  }
};

@Injectable({
  providedIn: 'root'
})

export class TvshowService {

  constructor(private httpClient: HttpClient) {

  }

  getShowsByName(showName: string): Observable<ICurrentShow[]> {
    return this.httpClient
    .get<ICurrentServiceShow[]>(`${environment.baseUrl}api.tvmaze.com/search/shows?q=${showName}`)
    .pipe(map(serviceShows => serviceShows.map( serviceShow => {
      var appSingleShow:ICurrentShow = this.transformToAppShow(serviceShow);
      console.log(appSingleShow);
      return appSingleShow;
    })))  
  }
  getSingleShowByName(showName: string): Observable<ICurrentShow[]> {
    return this.httpClient
    .get<ICurrentServiceShow[]>(`${environment.baseUrl}api.tvmaze.com/singlesearch/shows?q=${showName}`)
    .pipe(map(serviceShows => serviceShows.map( serviceShow => {
      var appShow:ICurrentShow = this.transformToSingleShow(serviceShow);
      console.log(appShow);
      return appShow;
    })))  
  }

  transformToSingleShow(serviceShow: ICurrentServiceShow): ICurrentShow {
    return {
      name: serviceShow.show.name,
      image: serviceShow.show.image? serviceShow.show.image.medium : 'assets/no-image.png ',
      runtime: serviceShow.show.runtime,
      rating: serviceShow.show.rating.average,
      language: serviceShow.show.language,
      summary: serviceShow.show.summary
    }
  }

  transformToAppShow(serviceShow: ICurrentServiceShow): ICurrentShow {
    return {
      name: serviceShow.show.name,
      image: serviceShow.show.image? serviceShow.show.image.medium : 'assets/no-image.png ',
      runtime: serviceShow.show.runtime,
      rating: serviceShow.show.rating.average,
      language: serviceShow.show.language,
      summary: serviceShow.show.summary
    }
  }
}
