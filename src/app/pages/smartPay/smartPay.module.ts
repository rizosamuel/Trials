import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ActionBarModule } from "~/app/components/actionBar/actionBar.module";
import { IndicatorModule } from "~/app/components/indicator/indicator.module";

import { SmartPayRoutingModule } from "./smartPay.routing";
import { SmartPayComponent } from "./smartPay.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SmartPayRoutingModule,
        ActionBarModule,
        IndicatorModule
    ],
    declarations: [
        SmartPayComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SmartPayModule { }
