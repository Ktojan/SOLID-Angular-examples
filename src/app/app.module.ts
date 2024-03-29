import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { WidgetComponent } from './widget/widget.component';
import { WeatherContentComponent } from './widget/weather-content.component';
import { VelocityContentComponent } from './widget/velocity-content.component';
import { KeyValuePipe } from '@angular/common';

@NgModule({
  declarations: [AppComponent, WidgetComponent, WeatherContentComponent, VelocityContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatBadgeModule,
    MatDividerModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [KeyValuePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
