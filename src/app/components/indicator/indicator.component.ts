import { Component, OnInit, Input } from "@angular/core";
import { AnimationCurve } from "tns-core-modules/ui/enums";
import { Label } from "tns-core-modules/ui/label"
import { LayoutBase } from "tns-core-modules/ui/layouts/layout-base"

@Component({
    selector: "ns-indicator",
    templateUrl: "./indicator.component.html",
    styleUrls: ["./indicator.component.css"]
})
export class IndicatorComponent implements OnInit {

    @Input() busy: boolean;

    constructor() { }

    ngOnInit(): void { }

    public onLoaded(args) {
        let wrapper = args.object as LayoutBase;
        wrapper.animate({
            rotate: 360,
            duration: 1500,
            iterations: Number.POSITIVE_INFINITY,
            curve: AnimationCurve.linear
        })
    }
}
