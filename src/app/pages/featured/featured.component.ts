import { Component, OnInit } from "@angular/core";
import { Header } from "~/app/models/header.model";

@Component({
    selector: "Featured",
    templateUrl: "./featured.component.html"
})
export class FeaturedComponent implements OnInit {

    public header: Header;
    public isBusy: boolean = false

    constructor() {
        this.header = new Header()
        this.header.title = "Featured"
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    public onFabTap(): void {
        console.log("fab tapped")
    }
}
