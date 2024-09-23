import { Component, Input, OnInit } from '@angular/core';
import { Source } from '../../model/Data';

@Component({
  selector: 'app-source',
  standalone: true,
  imports: [],
  templateUrl: './source.component.html',
  styleUrl: './source.component.scss'
})
export class SourceComponent implements OnInit {

  @Input() public source: Source | null = null;

  public annotations: string[][] = [];

  public ngOnInit(): void {
    if (!this.source) return;

    for (let key in this.source.annotations) {
      this.annotations.push([key, this.source.annotations[key]]);
    }

  }

}
