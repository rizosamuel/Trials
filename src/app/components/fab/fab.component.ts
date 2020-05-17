import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { TouchGestureEventData, GestureEventData } from "tns-core-modules/ui/gestures"
import { View } from "tns-core-modules/ui/core/view";
import { LayoutBase } from "tns-core-modules/ui/layouts/layout-base"

@Component({
    selector: "ns-fab",
    templateUrl: "./fab.component.html",
    styleUrls: ["./fab.component.css"]
})
export class FabComponent implements OnInit {

    @Output() nsFabTap: EventEmitter<GestureEventData> = new EventEmitter<GestureEventData>();

    constructor() { }

    ngOnInit(): void { }

    public onTap(args: GestureEventData): void {
        console.log("touch tap")
        this.nsFabTap.emit(args)
    }

    public onTouch(args: TouchGestureEventData): void {
        if (args.action !== 'down') return

        const wrapper = args.object as LayoutBase
        const label = wrapper.getViewById('add') as View
        wrapper.opacity = 0.5
        wrapper.animate({
            opacity: 1,
            duration: 1000
        });

        label.animate({
            scale: { x: 1.2, y: 1.2 },
            duration: 200
        }).then(() => {
            label.animate({
                scale: { x: 1, y: 1 },
                duration: 200
            })
        })
    }
}
