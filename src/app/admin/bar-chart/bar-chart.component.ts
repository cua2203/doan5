// src/app/bar-chart/bar-chart.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  @Input() barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  @Input() barChartLabels: string[] = [];
  @Input() barChartType: any ;
  @Input() barChartLegend: boolean = true;
  @Input() barChartData: any[] = [];

  constructor() { }
}
