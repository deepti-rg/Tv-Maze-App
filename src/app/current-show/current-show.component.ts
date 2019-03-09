import { Component, OnInit, Input } from '@angular/core';
import {ICurrentShow} from '../icurrent-show';
@Component({
  selector: 'app-current-show',
  templateUrl: './current-show.component.html',
  styleUrls: ['./current-show.component.css']
})
export class CurrentShowComponent implements OnInit {
  @Input() current: ICurrentShow
  constructor() {
    // this.current = {
    // name: 'Girls',
    // image: 'http://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg',
    // runtime: 30,
    // rating: 7.9,
    // language: 'English',
    // summary: 'This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.'
    // };
   }

  ngOnInit() {
  }

}
