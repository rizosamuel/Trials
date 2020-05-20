import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Header } from "~/app/models/header.model";
import { PanGestureEventData, TouchGestureEventData } from "tns-core-modules/ui/gestures/gestures";
import { View } from "tns-core-modules/ui/core/view/view";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "smartPay",
    templateUrl: "./smartPay.component.html",
    styleUrls: ["./smartPay.component.css"]
})
export class SmartPayComponent implements OnInit {

    @ViewChild("swipeLbl", { static: true }) swipeLabel: ElementRef;

    public header: Header;
    public isBusy: boolean = false;
    public swipeTxt: string = "Swipe"
    public payTxt: string = "Pay"
    public recieveTxt: string = "Recieve"

    constructor(private nsRouter: RouterExtensions) {
        this.header = new Header()
        this.header.title = "Smart Pay"
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.swipeLabel.nativeElement.text = "Swipe"
    }

    public onPan(args: PanGestureEventData): void {
        let view = args.object as View
        let swipe = this.swipeLabel.nativeElement
        console.log("Pan delta: [" + args.deltaX + ", " + args.deltaY + "] state: " + args.state);
        if (args.state === 1) {

        } else if (args.state === 2) {
            if (Math.abs(view.translateY) < 150) {
                setTimeout(() => {
                    swipe.text = view.translateY < 0 ? "Pay" : "Recieve"
                    swipe.color = "yellow"
                    swipe.fontSize = 20
                    this.payTxt = ""
                    this.recieveTxt = ""
                }, 100);
                view.translateY = args.deltaY
            } else {
                let mode = view.translateY < 0 ? 0 : 1
                setTimeout(() => {
                    if (mode == 0) {
                        this.nsRouter.navigate(["browse"])
                    } else if (mode == 1) {
                        this.nsRouter.navigate(["search"])
                    }
                }, 500);
            }
        } else if (args.state === 3) {
            setTimeout(() => {
                swipe.text = "Swipe"
                swipe.color = "white"
                swipe.fontSize = 15
                this.payTxt = "Pay"
                this.recieveTxt = "Recieve"
            }, 500);
            view.animate({
                translate: { x: 0, y: 0 },
                duration: 1000
            });
        }
    }

    public onTouch(args: TouchGestureEventData): void {
        const view = args.object as View
        if (args.action === 'down' || args.action === "move") {
            view.opacity = 0.8
            view.borderWidth = 2
            view.borderColor = "yellow"
        } else if (args.action === 'up' || args.action === 'cancel') {
            view.animate({
                opacity: 1,
                duration: 1000,
            }).then(() => {
                view.borderWidth = 0
            })
        }
    }
}
