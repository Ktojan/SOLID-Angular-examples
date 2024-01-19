import { Directive, Input } from "@angular/core";
import { JsonExporterService } from "../json-exporter.service";

@Directive()
export class WidgetBaseClass {
    @Input() title?: string = '';
    constructor(private jsonExporterService: JsonExporterService) {}

    onExportJson(name: string = 'noname'): void {
        this.jsonExporterService.exportFile(name);
    }
  }
