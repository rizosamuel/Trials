import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ActionBarModule } from "~/app/components/actionBar/actionBar.module";
import { IndicatorModule } from "~/app/components/indicator/indicator.module";

import { SettingsRoutingModule } from "./settings.routing";
import { SettingsComponent } from "./settings.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SettingsRoutingModule,
        ActionBarModule,
        IndicatorModule
    ],
    declarations: [
        SettingsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SettingsModule { }
