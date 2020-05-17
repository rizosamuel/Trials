import { Component, OnInit } from "@angular/core";
import { Header } from "~/app/models/header.model";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {

    public header: Header;
    public isBusy: boolean = false

    constructor() {
        this.header = new Header()
        this.header.title = "Search"
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
