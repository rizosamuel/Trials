import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ActionBarModule } from "~/app/components/actionBar/actionBar.module";
import { IndicatorModule } from "~/app/components/indicator/indicator.module";
import { FabModule } from "~/app/components/fab/fab.module";

import { FeaturedRoutingModule } from "./featured.routing";
import { FeaturedComponent } from "./featured.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        FeaturedRoutingModule,
        ActionBarModule,
        IndicatorModule,
        FabModule
    ],
    declarations: [
        FeaturedComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class FeaturedModule { }
