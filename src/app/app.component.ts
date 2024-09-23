import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseChartComponent } from "./base/base-chart/base-chart.component";
import { DataService } from './data/data.service';
import { Data } from './model/Data';
import { SourceComponent } from "./components/source/source.component";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BaseChartComponent, SourceComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  public title = 'AngularCharts';

  private dataService = inject(DataService);

  public data: Data | null = null;

  public chartTypeControl = new FormControl<string>("line");

  public chartType = new BehaviorSubject<string>("line");

  constructor() {
    this.dataService.getData().subscribe(data => this.data = data);
  }

  public ngOnInit(): void {
    this.chartTypeControl.valueChanges
      .pipe(filter(data => !!data))
      .subscribe(data => this.chartType.next(data!));
  }

}
