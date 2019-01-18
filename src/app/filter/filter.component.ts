import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() filterSelected: string;
  @Output() filterSelectedChange = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  changeFilter(filter) {
    this.filterSelectedChange.emit(filter);
  }
}
