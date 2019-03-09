import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.css']
})
export class ShowSearchComponent implements OnInit {
  search = new FormControl('', [Validators.minLength(2)]);
  @Output() searchEvent = new EventEmitter<string>();

  constructor() { }
  
  ngOnInit() {
    this.search.valueChanges
    .pipe(debounceTime(1000))
    .subscribe((searchvalue : string) => {
      console.log(searchvalue);
      this.searchEvent.emit(searchvalue);
    })
  }

}
