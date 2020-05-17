import { Component, OnInit } from "@angular/core";
import { android, AndroidApplication } from "tns-core-modules/application";
import { Header } from "~/app/models/header.model";
import { Page } from "tns-core-modules/ui/page/page";
// import { alert } from 'tns-core-modules/ui/dialogs';

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    public header: Header
    public isBusy: boolean = false
    public isExit: boolean = false

    constructor(private page: Page) {

        this.header = new Header()
        this.header.title = "Home"
        this.header.menuIcon = true

        this.pageLoaded()
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    private pageLoaded(): void {
        this.page.on(Page.loadedEvent, () => {
            if (!android) return
            android.on(
                AndroidApplication.activityBackPressedEvent, this.backEvent, this
            )
        })

        this.page.on(Page.unloadedEvent, () => {
            if (!android) return
            android.off(
                AndroidApplication.activityBackPressedEvent, this.backEvent, this
            )
        })
    }

    private backEvent(args) {
        // if (!this.isExit) {
        //     args.cancel = false;
        //     this.showConfirm()
        // }
    }

    private showConfirm(): void {
        console.log("show dialog")
        this.isExit = true
        // let alert = new alert({
        //     title: 'Alert',
        //     message: 'Press back again to exit',
        //     okButtonText: ''
        // }).then((result) => {
        //     console.log("falsed")
        //     this.isExit = false
        // })
    }
}
