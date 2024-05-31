import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule, NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-projects-tabs-filter',
  standalone: true,
  imports: [
    NgClass,
    NgFor
  ],
  templateUrl: './projects-tabs-filter.component.html',
  styleUrls: ['./projects-tabs-filter.component.scss']
})
export class ProjectsTabsFilterComponent implements OnChanges {
  @Input() projectFilters : any;
  @Output() projectFilterClickedEvent = new EventEmitter<number>();

  onProjectFilterItemClicked(id : number) : void{
    this.projectFilterClickedEvent.emit(id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["projectFilters"].firstChange) {
      const id = this.projectFilters[0].id;
      this.onProjectFilterItemClicked(id);
    }
  }
}
