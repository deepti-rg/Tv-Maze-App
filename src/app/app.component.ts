import { Component } from '@angular/core';
import { TvshowService } from './tvshow.service';
import { ICurrentShow } from './icurrent-show';
// import { icurrentshow } from './icurrent-show';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TV MAZE';
  breakpoint = 0;
  shows: ICurrentShow[];

  constructor (private tvShowService: TvshowService) {
  }
  showSearch(searchValue) {
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
