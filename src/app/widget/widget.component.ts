import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { Reloadable, RELOADABLE_TOKEN } from '../shared-stuff';
import { WidgetBaseClass } from './widget-base-class';

@Component({
  selector: 'app-widget',
  template: `
    <div class="header">
      <h1>{{title}}</h1>
      <button [matBadge]="counter" mat-stroked-button (click)="onExportJson()">
        Export as JSON
      </button>
    </div>
    <mat-divider></mat-divider>
    <ng-content></ng-content>
  `,
  styles: [
    `
      :host {
        display: block;
        border: #f0ebeb solid 1px;
        border-radius: 5px;
        padding: 15px;
        background-color: #fafafa;
        width: 400px;
        margin-left: 20px;
      }
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `,
  ],
})
export class WidgetComponent extends WidgetBaseClass implements AfterContentInit {  
  @ContentChild(RELOADABLE_TOKEN) childComp?: Reloadable;
  
  /*  ------------ WRONG DEPENDENCY INVERSION ----------------  

  @ContentChild(WeatherContentComponent) weatherComp?: WeatherContentComponent;
  ngAfterContentInit() {
    if (this.weatherComp) this.weatherComp.compData.temp += 10.5;
  }
  */
  counter = 0;

  ngAfterContentInit() {
    if (this.childComp) {
      this.childComp.onLoaded();
    }
  }

  onExportJson() {
    super.onExportJson(this.title || 'some');
    this.counter++;
  }

/*  ------------ WRONG LISKOV SUBSTITUTION IMPLEMENTATION ----------------  
  onExportJson() {
    return prompt('Lets violate Liskov subst principle', 'why not?');
  }
*/

}
