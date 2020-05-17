import { Component, OnInit } from "@angular/core";
import { Header } from "~/app/models/header.model";

@Component({
    selector: "Settings",
    templateUrl: "./settings.component.html"
})
export class SettingsComponent implements OnInit {

    public header: Header;
    public isBusy: boolean = false

    constructor() {
        this.header = new Header()
        this.header.title = "Settings"
        this.header.gearIcon = false
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
