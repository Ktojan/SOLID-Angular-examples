import { Component, OnInit } from '@angular/core';
import { Reloadable, RELOADABLE_TOKEN, WidgetEntity } from '../shared-stuff';
import { WidgetBaseClass } from './widget-base-class';

@Component({
  selector: 'app-wether-content',
  template: ` <h5>Currently</h5>
    <section *ngIf="!isLoading" class="widget-content">
    <mat-icon class="widget-icon" [style.color]="compData.is_sunny ? 'orange' : 'gray'"
        >{{ compData.is_sunny ? "wb_sunny" : "wb_cloudy" }}</mat-icon>
      <div class="value">
        <span *ngIf="compData.temp > 0">+</span>{{ compData.temp }}
      </div>
    </section>
    <div *ngIf="isLoading" class="widget-content"><mat-spinner></mat-spinner></div>`,
  styleUrls: ['./widget-content.scss'],
  providers: [
    {provide: RELOADABLE_TOKEN, useClass: WeatherContentComponent }
  ]
})
export class WeatherContentComponent extends WidgetBaseClass implements WidgetEntity, Reloadable {
  compData = {
    is_sunny: true,
    temp: -2
  }
  isLoading = false;
  reloadInterval = 13.5;

  onLoaded(): void {
    setInterval(() => {
      this.isLoading = true;
      const randFactor = Math.round((Math.random()-0.5)*2);
      this.compData.temp += randFactor;
      this.compData.is_sunny = randFactor != -1; 
      setTimeout(() => this.isLoading = false, 1145);
    }, this.reloadInterval*1000);    
  }

  ngOnInit() {
    this.onLoaded();
  }

  ///// consider:  implementation of clearTimer(id) inside onDestroy()
}
