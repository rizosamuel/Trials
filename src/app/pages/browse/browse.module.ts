import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ActionBarModule } from "~/app/components/actionBar/actionBar.module";
import { IndicatorModule } from "~/app/components/indicator/indicator.module";

import { BrowseRoutingModule } from "./browse.routing";
import { BrowseComponent } from "./browse.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        BrowseRoutingModule,
        ActionBarModule,
        IndicatorModule
    ],
    declarations: [
        BrowseComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BrowseModule { }
