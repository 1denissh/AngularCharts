import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { Chart, registerables } from "chart.js";
import { BaseChartDirective } from 'ng2-charts';
import { Item } from '../../model/Data';
import { Subject } from 'rxjs';

Chart.register(...registerables);

@Component({
  selector: 'app-base-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './base-chart.component.html',
  styleUrl: './base-chart.component.scss'
})
export class BaseChartComponent implements AfterViewInit {

  @Input() public data: Item[] = [];

  @Input() public chartType!: Subject<string>;

  @ViewChild('canvas') public canvas!: any;

  public chart: any;

  constructor() { }

  public ngAfterViewInit(): void {
    this.chartType.subscribe(type => this.refresh(type));
  }

  public refresh(type: string) {
    const dataset: any = {
      label: "Население",
      data: [],
      backgroundColor: 'blue',
      fill: false,
      borderColor: '#0000ff99',
      tension: 0.1
    };

    const config: any = {
      type: type,
      data: {
        labels: [],
        datasets: [dataset]
      },
      options: {
        aspectRatio: 2.5,
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    };

    for (let i = this.data.length - 1; i >= 0; i--) {
      const item = this.data[i];

      dataset.data.push(item.Population);
      config.data.labels.push(item.Year);
    }

    if (this.chart)
      this.chart.destroy();

    this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), config);
  }

}

