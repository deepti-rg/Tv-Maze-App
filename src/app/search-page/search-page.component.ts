import { Component, OnInit } from '@angular/core';
import { ICurrentShow } from '../icurrent-show';
import { TvshowService } from '../tvshow.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  breakpoint = 0;
  shows: ICurrentShow[];

  constructor (private tvShowService: TvshowService) {
  }
  showSearch(searchValue) {
    this.tvShowService.getShowsByName(searchValue)
    .subscribe(
      (data: ICurrentShow[]) => (this.shows = data))
  }
  showSingleSearch(searchValue) {
    this.tvShowService.getShowsByName(searchValue)
    .subscribe(
      (data: ICurrentShow[]) => (this.shows = data))
  }
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 5;
}

onResize(event) {
  this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 5;
}
}
