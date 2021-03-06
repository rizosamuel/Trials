import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: () => import("~/app/pages/home/home.module").then((m) => m.HomeModule) },
    { path: "browse", loadChildren: () => import("~/app/pages/browse/browse.module").then((m) => m.BrowseModule) },
    { path: "search", loadChildren: () => import("~/app/pages/search/search.module").then((m) => m.SearchModule) },
    { path: "featured", loadChildren: () => import("~/app/pages/featured/featured.module").then((m) => m.FeaturedModule) },
    { path: "settings", loadChildren: () => import("~/app/pages/settings/settings.module").then((m) => m.SettingsModule) },
    { path: "smartPay", loadChildren: () => import("~/app/pages/smartPay/smartPay.module").then((m) => m.SmartPayModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
