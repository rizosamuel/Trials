import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { TouchGestureEventData, GestureEventData } from "tns-core-modules/ui/gestures"
import { View } from "tns-core-modules/ui/core/view";
import { LayoutBase } from "tns-core-modules/ui/layouts/layout-base"
import { Label } from "tns-core-modules/ui/label";

@Component({
    selector: "ns-button",
    templateUrl: "./button.component.html",
    styleUrls: ["./button.component.css"]
})
export class ButtonComponent implements OnInit {

    @Output() nsBtnTap: EventEmitter<GestureEventData> = new EventEmitter<GestureEventData>();
    @Input() text: string;

    constructor() { }

    ngOnInit(): void { }

    public onTap(args): void {
        this.nsBtnTap.emit(args)
    }

    public onTouch(args: TouchGestureEventData): void {

        if (args.action !== 'down') return

        const button = args.object as View
        const wrapper = button.parent as LayoutBase
        const circle = this.getCircleView(args)

        wrapper.addChild(circle)

        circle.animate({
            scale: { x: 0, y: 0 },
            opacity: 0.4,
            duration: 1
        }).then(() => {
            circle.animate({
                scale: { x: 2, y: 2 },
                opacity: 0,
                duration: 5000
            }).then(() => {
                wrapper.removeChild(circle)
            })
        })
    }

    private getCircleView(args): any {

        console.log("inside circle funtion")
        const button = args.object as View
        const x = args.getX()
        const y = args.getY()
        const btnHeight = Number(button.height)
        const btnWidth = Number(button.width)
        console.log(button.width)
        const diameter = Math.max(btnHeight, btnWidth)
        const circle = new Label()

        circle.width = diameter
        circle.height = diameter
        circle.borderRadius = diameter / 2
        circle.top = y - diameter / 2
        circle.left = x - diameter / 2
        circle.backgroundColor = 'white'
        circle.opacity = 0

        return circle
    }
}
