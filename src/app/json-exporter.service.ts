import { Injectable } from '@angular/core';
import { sunny25 } from './shared';

@Injectable({
  providedIn: 'root',
})
export class JsonExporterService {
  constructor() {}

  export() {
    let data = JSON.stringify(sunny25);
    let dataUri ='data:application/json;charset=utf-8,' + encodeURIComponent(data);
    let exportFileName = 'weather.json';
    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileName);
    linkElement.click();
  }
}
