/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, Input } from '@angular/core';
import { MatMenuTrigger, MatMenu } from '@angular/material';
export class TourAnchorOpenerComponent {
    constructor() {
        this.menu = new MatMenu(undefined, undefined, { xPosition: 'after', yPosition: 'below', overlapTrigger: true, backdropClass: '' });
    }
}
TourAnchorOpenerComponent.decorators = [
    { type: Component, args: [{
                selector: 'tourAnchorOpener',
                template: `<span [matMenuTriggerFor]="menu" #trigger="matMenuTrigger"></span>`,
                styles: [`:host { display: none; }`]
            }] }
];
TourAnchorOpenerComponent.propDecorators = {
    menu: [{ type: Input }],
    trigger: [{ type: ViewChild, args: [MatMenuTrigger, { static: true },] }]
};
if (false) {
    /** @type {?} */
    TourAnchorOpenerComponent.prototype.menu;
    /** @type {?} */
    TourAnchorOpenerComponent.prototype.trigger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1hbmNob3Itb3BlbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10b3VyLW1kLW1lbnUvIiwic291cmNlcyI6WyJsaWIvdG91ci1hbmNob3Itb3BlbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFPNUQsTUFBTSxPQUFPLHlCQUF5QjtJQUx0QztRQU1XLFNBQUksR0FBWSxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFHbEosQ0FBQzs7O1lBVEEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBRTVCLFFBQVEsRUFBRSxvRUFBb0U7eUJBRHJFLDBCQUEwQjthQUVwQzs7O21CQUVFLEtBQUs7c0JBRUwsU0FBUyxTQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7SUFGM0MseUNBQWdKOztJQUVoSiw0Q0FBNEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdE1lbnVUcmlnZ2VyLCBNYXRNZW51IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0b3VyQW5jaG9yT3BlbmVyJyxcbiAgc3R5bGVzOiBbYDpob3N0IHsgZGlzcGxheTogbm9uZTsgfWBdLFxuICB0ZW1wbGF0ZTogYDxzcGFuIFttYXRNZW51VHJpZ2dlckZvcl09XCJtZW51XCIgI3RyaWdnZXI9XCJtYXRNZW51VHJpZ2dlclwiPjwvc3Bhbj5gXG59KVxuZXhwb3J0IGNsYXNzIFRvdXJBbmNob3JPcGVuZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBtZW51OiBNYXRNZW51ID0gbmV3IE1hdE1lbnUodW5kZWZpbmVkLCB1bmRlZmluZWQsIHsgeFBvc2l0aW9uOiAnYWZ0ZXInLCB5UG9zaXRpb246ICdiZWxvdycsIG92ZXJsYXBUcmlnZ2VyOiB0cnVlLCBiYWNrZHJvcENsYXNzOiAnJyB9KTtcblxuICBAVmlld0NoaWxkKE1hdE1lbnVUcmlnZ2VyLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgdHJpZ2dlcjogTWF0TWVudVRyaWdnZXI7XG59XG4iXX0=