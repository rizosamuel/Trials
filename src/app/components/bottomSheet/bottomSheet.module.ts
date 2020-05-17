import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { BottomSheetComponent } from './bottomSheet.component';

@NgModule({
    declarations: [
        BottomSheetComponent
    ],
    imports: [
        NativeScriptCommonModule
    ],
    exports: [
        BottomSheetComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class BottomSheetModule { }