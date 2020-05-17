import { Component, OnInit } from "@angular/core";
import { Header } from "~/app/models/header.model";

@Component({
    selector: "Browse",
    templateUrl: "./browse.component.html"
})
export class BrowseComponent implements OnInit {

    public header: Header;
    public isBusy: boolean = false

    constructor() {
        this.header = new Header()
        this.header.title = "Browse"
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
