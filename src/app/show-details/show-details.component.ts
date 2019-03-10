import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICurrentShow } from '../icurrent-show';
import { TvshowService } from '../tvshow.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  showName: string;
  show: ICurrentShow;
  

  constructor(private route: ActivatedRoute, private tvShowService: TvshowService ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // this.showName = params['showName'];
      this.tvShowService.getSingleShowByName(params['showName'])
      
      .subscribe(
        (data: ICurrentShow) => (this.show = data))
    })
  }

}
