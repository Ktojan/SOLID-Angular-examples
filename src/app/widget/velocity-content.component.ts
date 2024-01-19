import { Component } from '@angular/core';
import { WidgetEntity } from '../shared-stuff';
import { WidgetBaseClass } from './widget-base-class';

@Component({
  selector: 'app-velocity-content',
  template: `<h5>Last sprint</h5>
    <section class="widget-content">
      <mat-icon class="widget-icon">assessment</mat-icon>
      <div *ngFor="let item of (compData | keyvalue)" class="value">
        {{item.key}}: <strong>{{item.value}}</strong></div>
    </section>`,
  styleUrls: ['./widget-content.scss'],
})
export class VelocityContentComponent extends WidgetBaseClass implements WidgetEntity {
  compData = {
    Planned: 25,
    Achieved: 22
  }
}

/*  ------------ WRONG INTERFACE SEGREGATION IMPLEMENTATION ----------------

export class VelocityContentComponent implements AllWidgetsEntity {
compData = {
    Planned: 25,
    Achieved: 22
  }
isLoading = false;
onLoaded(): void {}
*/
