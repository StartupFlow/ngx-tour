/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TourService } from 'ngx-tour-core';
import { Directive, Input } from '@angular/core';
export class TourAnchorConsoleDirective {
    /**
     * @param {?} tourService
     */
    constructor(tourService) {
        this.tourService = tourService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.tourService.register(this.tourAnchor, this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.tourService.unregister(this.tourAnchor);
    }
    /**
     * @param {?} step
     * @return {?}
     */
    showTourStep(step) {
        console.group(step.title);
        console.log(step.content);
        console.log(`${step.placement || 'above'} ${this.tourAnchor}`);
        console.groupEnd();
    }
    /**
     * @return {?}
     */
    hideTourStep() {
        return;
    }
}
TourAnchorConsoleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tourAnchor]',
            },] }
];
/** @nocollapse */
TourAnchorConsoleDirective.ctorParameters = () => [
    { type: TourService }
];
TourAnchorConsoleDirective.propDecorators = {
    tourAnchor: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TourAnchorConsoleDirective.prototype.tourAnchor;
    /**
     * @type {?}
     * @private
     */
    TourAnchorConsoleDirective.prototype.tourService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1hbmNob3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXRvdXItY29uc29sZS8iLCJzb3VyY2VzIjpbImxpYi90b3VyLWFuY2hvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBdUIsV0FBVyxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQzlFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUtwRSxNQUFNLE9BQU8sMEJBQTBCOzs7O0lBR3JDLFlBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQzs7OztJQUV6QyxRQUFRO1FBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFTSxZQUFZLENBQUMsSUFBaUI7UUFDbkMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7O0lBRU0sWUFBWTtRQUNqQixPQUFPO0lBQ1QsQ0FBQzs7O1lBekJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYzthQUN6Qjs7OztZQUw2QixXQUFXOzs7eUJBT3RDLEtBQUs7Ozs7SUFBTixnREFBbUM7Ozs7O0lBRXZCLGlEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRvdXJBbmNob3JEaXJlY3RpdmUsIFRvdXJTZXJ2aWNlLCBJU3RlcE9wdGlvbiB9IGZyb20gJ25neC10b3VyLWNvcmUnO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RvdXJBbmNob3JdJyxcbn0pXG5leHBvcnQgY2xhc3MgVG91ckFuY2hvckNvbnNvbGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgVG91ckFuY2hvckRpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIHB1YmxpYyB0b3VyQW5jaG9yOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0b3VyU2VydmljZTogVG91clNlcnZpY2UpIHt9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudG91clNlcnZpY2UucmVnaXN0ZXIodGhpcy50b3VyQW5jaG9yLCB0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnRvdXJTZXJ2aWNlLnVucmVnaXN0ZXIodGhpcy50b3VyQW5jaG9yKTtcbiAgfVxuXG4gIHB1YmxpYyBzaG93VG91clN0ZXAoc3RlcDogSVN0ZXBPcHRpb24pOiB2b2lkIHtcbiAgICBjb25zb2xlLmdyb3VwKHN0ZXAudGl0bGUpO1xuICAgIGNvbnNvbGUubG9nKHN0ZXAuY29udGVudCk7XG4gICAgY29uc29sZS5sb2coYCR7c3RlcC5wbGFjZW1lbnQgfHwgJ2Fib3ZlJ30gJHt0aGlzLnRvdXJBbmNob3J9YCk7XG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xuICB9XG5cbiAgcHVibGljIGhpZGVUb3VyU3RlcCgpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==