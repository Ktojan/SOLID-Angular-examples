import { JsonExporterService } from "./json-exporter.service";
import { Component } from "@angular/core";
import { DayWeather, sunny25 } from "./shared";

@Component({
  selector: "app-widget",
  template: `
    <div class="header">
      <h1>Weather</h1>
      <button mat-stroked-button (click)="onExportJson()">
        Export as JSON
      </button>
    </div>
    <mat-divider></mat-divider>
    <h3>Currently is</h3>
    <section class="wether-widget">
      <mat-icon
        class="widget-icon"
        [style.color]="dayWeather.weather.is_sunny ? 'orange' : 'gray'"
        >{{ dayWeather.weather.is_sunny ? "wb_sunny" : "wb_cloudy" }}</mat-icon>
      <div class="value">
        <span *ngIf="dayWeather.weather.temp > 0">+</span>{{ dayWeather.weather.temp }}
      </div>
    </section>
  `,
  styleUrls: ["widget.component.css"],
})
export class WidgetComponent {
  constructor(private jsonExporter: JsonExporterService) {}
  data = JSON.stringify(sunny25);
  dayWeather: DayWeather = sunny25;

  onExportJson(): void {
    this.jsonExporter.export();
  }
}

/*  ------------ WRONG IMPLEMENTATION ----------------
onExportJson() {
    let data = JSON.stringify(sunny25);
    let dataUri ='data:application/json;charset=utf-8,' + encodeURIComponent(data);
    let exportFileName = 'weather.json';
    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileName);
    linkElement.click();
  }

*/
