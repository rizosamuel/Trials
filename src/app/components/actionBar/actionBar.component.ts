import { Component, OnInit, Input } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { getRootView } from "tns-core-modules/application";
import { RouterExtensions } from 'nativescript-angular/router';
import { Header } from '~/app/models/header.model';
import { View } from "tns-core-modules/ui/core/view";

@Component({
    selector: "ns-action-bar",
    templateUrl: "./actionbar.component.html",
    styleUrls: ["./actionbar.component.css"]
})
export class ActionBarComponent implements OnInit {

    public header = new Header()

    private hamburger: string = '~/app/assets/icons/hamburger.png'
    private backArrow: string = '~/app/assets/icons/back-arrow.png'
    public leftIcon: string;

    constructor(private nsRouter: RouterExtensions) { }

    ngOnInit(): void {
        this.leftIcon = this.header.menuIcon ? this.hamburger : this.backArrow
    }

    @Input()
    set headerData(header: Header) {
        this.header = header;
    }

    get headerData() {
        return this.header;
    }

    onLeftIconTap(): void {
        if (this.leftIcon === this.hamburger) {
            const sideDrawer = <RadSideDrawer>getRootView();
            sideDrawer.showDrawer();
        } else {
            this.nsRouter.back()
        }
    }

    public onTap(): void {
        console.log("tap event")
    }

    public onTouch(args): void {
        this.animateIcon(args)
    }

    private animateIcon(args): void {
        const image = args.object as View
        image.animate({
            scale: { x: 1.1, y: 1.1 },
            duration: 200
        }).then(() => {
            image.animate({
                scale: { x: 1, y: 1 },
                duration: 200
            })
        })
    }
}
