import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ActionBarModule } from "~/app/components/actionBar/actionBar.module";
import { IndicatorModule } from "~/app/components/indicator/indicator.module";

import { HomeRoutingModule } from "./home.routing";
import { HomeComponent } from "./home.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        ActionBarModule,
        IndicatorModule
    ],
    declarations: [
        HomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
