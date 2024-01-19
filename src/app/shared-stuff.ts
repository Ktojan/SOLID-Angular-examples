import { InjectionToken } from "@angular/core";

export interface WidgetEntity {
    compData: Object
}

export interface Reloadable {
    isLoading: boolean;
    onLoaded(): void;    
}

/*  ------------ WRONG INTERFACE SEGREGATION IMPLEMENTATION ----------------

export interface AllWidgetsEntity {
    compData: Object
    isLoading: boolean;
    onLoaded(): void;    
}
*/

export const RELOADABLE_TOKEN = new InjectionToken<Reloadable>('reloadable-content')
