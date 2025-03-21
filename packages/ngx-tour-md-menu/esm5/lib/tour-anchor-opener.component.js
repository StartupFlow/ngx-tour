/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, Input } from '@angular/core';
import { MatMenuTrigger, MatMenu } from '@angular/material';
var TourAnchorOpenerComponent = /** @class */ (function () {
    function TourAnchorOpenerComponent() {
        this.menu = new MatMenu(undefined, undefined, { xPosition: 'after', yPosition: 'below', overlapTrigger: true, backdropClass: '' });
    }
    TourAnchorOpenerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tourAnchorOpener',
                    template: "<span [matMenuTriggerFor]=\"menu\" #trigger=\"matMenuTrigger\"></span>",
                    styles: [":host { display: none; }"]
                }] }
    ];
    TourAnchorOpenerComponent.propDecorators = {
        menu: [{ type: Input }],
        trigger: [{ type: ViewChild, args: [MatMenuTrigger, { static: true },] }]
    };
    return TourAnchorOpenerComponent;
}());
export { TourAnchorOpenerComponent };
if (false) {
    /** @type {?} */
    TourAnchorOpenerComponent.prototype.menu;
    /** @type {?} */
    TourAnchorOpenerComponent.prototype.trigger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1hbmNob3Itb3BlbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10b3VyLW1kLW1lbnUvIiwic291cmNlcyI6WyJsaWIvdG91ci1hbmNob3Itb3BlbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFNUQ7SUFBQTtRQU1XLFNBQUksR0FBWSxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFHbEosQ0FBQzs7Z0JBVEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBRTVCLFFBQVEsRUFBRSx3RUFBb0U7NkJBRHJFLDBCQUEwQjtpQkFFcEM7Ozt1QkFFRSxLQUFLOzBCQUVMLFNBQVMsU0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQUM3QyxnQ0FBQztDQUFBLEFBVEQsSUFTQztTQUpZLHlCQUF5Qjs7O0lBQ3BDLHlDQUFnSjs7SUFFaEosNENBQTRFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRNZW51VHJpZ2dlciwgTWF0TWVudSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG91ckFuY2hvck9wZW5lcicsXG4gIHN0eWxlczogW2A6aG9zdCB7IGRpc3BsYXk6IG5vbmU7IH1gXSxcbiAgdGVtcGxhdGU6IGA8c3BhbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwibWVudVwiICN0cmlnZ2VyPVwibWF0TWVudVRyaWdnZXJcIj48L3NwYW4+YFxufSlcbmV4cG9ydCBjbGFzcyBUb3VyQW5jaG9yT3BlbmVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbWVudTogTWF0TWVudSA9IG5ldyBNYXRNZW51KHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB7IHhQb3NpdGlvbjogJ2FmdGVyJywgeVBvc2l0aW9uOiAnYmVsb3cnLCBvdmVybGFwVHJpZ2dlcjogdHJ1ZSwgYmFja2Ryb3BDbGFzczogJycgfSk7XG5cbiAgQFZpZXdDaGlsZChNYXRNZW51VHJpZ2dlciwgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIHRyaWdnZXI6IE1hdE1lbnVUcmlnZ2VyO1xufVxuIl19