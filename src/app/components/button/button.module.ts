import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ButtonComponent } from './button.component';

@NgModule({
    declarations: [
        ButtonComponent
    ],
    imports: [
        NativeScriptCommonModule
    ],
    exports: [
        ButtonComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ButtonModule { }