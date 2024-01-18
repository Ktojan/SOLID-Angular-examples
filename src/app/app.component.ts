import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <span>SOLID Weather in Angular area app</span>
    </mat-toolbar>
    <main class="content">
      <app-widget></app-widget>
    </main>
  `,
  styles: [
    `
      .content {
        background-color: #fff;
        padding: 2rem;
        height: calc(100vh - 64px);
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
      }
    `,
  ],
})
export class AppComponent {}

/*  ------------ WRONG IMPLEMENTATION ----------------

  <mat-toolbar color="primary">
      <span>My App</span>
    </mat-toolbar>
    <main class="content">
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
    </main>

  onExportJson() {
    let data = JSON.stringify({ wether: { is_sunny: true, temp: '+25' } });
    let dataUri =
      'data:application/json;charset=utf-8,' + encodeURIComponent(data);
    let exportFileName = 'wether.json';
    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileName);
    linkElement.click();
  }
*/
