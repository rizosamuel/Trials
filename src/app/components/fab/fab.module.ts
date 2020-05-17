import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { FabComponent } from './fab.component';

@NgModule({
    declarations: [
        FabComponent
    ],
    imports: [
        NativeScriptCommonModule
    ],
    exports: [
        FabComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class FabModule { }