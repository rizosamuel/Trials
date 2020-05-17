import { Component, OnInit, Input } from "@angular/core";
import { CubicBezierAnimationCurve } from "tns-core-modules/ui/animation/animation"
import { View } from "tns-core-modules/ui/core/view";
import { screen } from "tns-core-modules/platform";
import { Visibility } from "tns-core-modules/ui/enums"

@Component({
    selector: "ns-bottom-sheet",
    templateUrl: "./bottomSheet.component.html",
    styleUrls: ["./bottomSheet.component.css"]
})
export class BottomSheetComponent implements OnInit {

    @Input() open: boolean

    private bottomSheet: View;
    private wrapper: View;

    constructor() { }

    ngOnInit(): void { }

    public onLoaded(args): void {
        this.wrapper = args.object.parent as View
        this.bottomSheet = args.object as View
        this.wrapper.opacity = 0
        this.bottomSheet.translateY = screen.mainScreen.heightDIPs
    }

    public showBottomSheet() {
        this.wrapper.visibility = Visibility.visible
        this.bottomSheet.animate({
            translate: { x: 0, y: 0 },
            duration: 1000,
            curve: new CubicBezierAnimationCurve(.44, .63, 0, 1)
        });

        this.wrapper.animate({
            opacity: 1,
            duration: 1000
        })
    }

    public hideBottomSheet() {
        this.bottomSheet.animate({
            translate: { x: 0, y: screen.mainScreen.heightDIPs },
            duration: 1000,
            curve: new CubicBezierAnimationCurve(.44, .63, 0, 1)
        });

        this.wrapper.animate({
            opacity: 0,
            duration: 1000
        }).then(() => {
            this.wrapper.visibility = Visibility.collapse
        })
    }
}
