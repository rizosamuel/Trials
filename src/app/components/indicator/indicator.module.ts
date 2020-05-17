import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { IndicatorComponent } from './indicator.component';

@NgModule({
    declarations: [
        IndicatorComponent
    ],
    imports: [
        NativeScriptCommonModule
    ],
    exports: [
        IndicatorComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class IndicatorModule { }