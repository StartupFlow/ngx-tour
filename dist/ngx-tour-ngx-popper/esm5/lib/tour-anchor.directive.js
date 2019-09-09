/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Host, HostBinding, Input } from '@angular/core';
import { PopperController, Placements, Triggers } from 'ngx-popper';
import withinviewport from 'withinviewport';
import { NgxpTourService } from './ngx-popper-tour.service';
import { TourStepTemplateService } from './tour-step-template.service';
var TourAnchorNgxPopperPopoverDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TourAnchorNgxPopperPopoverDirective, _super);
    function TourAnchorNgxPopperPopoverDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Overwrite parent ngOnInit to do nothing since the content property isn't set yet.
    // Overwrite parent ngOnInit to do nothing since the content property isn't set yet.
    /**
     * @return {?}
     */
    TourAnchorNgxPopperPopoverDirective.prototype.ngOnInit = 
    // Overwrite parent ngOnInit to do nothing since the content property isn't set yet.
    /**
     * @return {?}
     */
    function () { };
    // Call this to initialize the popover once the content has been set
    // Call this to initialize the popover once the content has been set
    /**
     * @return {?}
     */
    TourAnchorNgxPopperPopoverDirective.prototype.initialize = 
    // Call this to initialize the popover once the content has been set
    /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
    };
    TourAnchorNgxPopperPopoverDirective.decorators = [
        { type: Directive, args: [{ selector: '[tourAnchor]' },] }
    ];
    return TourAnchorNgxPopperPopoverDirective;
}(PopperController));
export { TourAnchorNgxPopperPopoverDirective };
var TourAnchorNgxPopperDirective = /** @class */ (function () {
    function TourAnchorNgxPopperDirective(tourService, tourStepTemplate, element, popoverDirective) {
        this.tourService = tourService;
        this.tourStepTemplate = tourStepTemplate;
        this.element = element;
        this.popoverDirective = popoverDirective;
    }
    /**
     * @return {?}
     */
    TourAnchorNgxPopperDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.tourService.register(this.tourAnchor, this);
    };
    /**
     * @return {?}
     */
    TourAnchorNgxPopperDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.tourService.unregister(this.tourAnchor);
    };
    /**
     * @param {?} step
     * @return {?}
     */
    TourAnchorNgxPopperDirective.prototype.showTourStep = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
        this.isActive = true;
        this.tourStepTemplate.templateComponent.step = step;
        step.prevBtnTitle = step.prevBtnTitle || 'Prev';
        step.nextBtnTitle = step.nextBtnTitle || 'Next';
        step.endBtnTitle = step.endBtnTitle || 'End';
        this.popoverDirective.content = this.tourStepTemplate.template;
        this.popoverDirective.targetElement = this.element.nativeElement;
        this.popoverDirective.placement = step.placement || Placements.Auto;
        this.popoverDirective.showTrigger = Triggers.NONE;
        if (step.popperSettings) {
            this.popoverDirective.boundariesElement = step.popperSettings.boundariesElement || undefined;
            this.popoverDirective.closeOnClickOutside = step.popperSettings.closeOnClickOutside || false;
            this.popoverDirective.disableAnimation = step.popperSettings.disableAnimation || false;
            this.popoverDirective.disabled = step.popperSettings.disabled || false;
            this.popoverDirective.disableStyle = step.popperSettings.disableStyle || false;
            this.popoverDirective.forceDetection = step.popperSettings.forceDetection || false;
            this.popoverDirective.hideOnClickOutside = step.popperSettings.hideOnClickOutside || false;
            this.popoverDirective.hideOnScroll = step.popperSettings.hideOnScroll || false;
            this.popoverDirective.hideTimeout = step.popperSettings.hideTimeout || 0;
            this.popoverDirective.positionFixed = step.popperSettings.positionFixed || false;
            this.popoverDirective.showDelay = step.popperSettings.showDelay || 0;
            this.popoverDirective.showOnStart = step.popperSettings.showOnStart || false;
            this.popoverDirective.showTrigger = step.popperSettings.showTrigger || Triggers.NONE;
            this.popoverDirective.timeoutAfterShow = step.popperSettings.timeoutAfterShow || 0;
            //TODO: Can these even get passed in via json?
            // this.popoverDirective.popperModifiers = step.popperSettings.popperModifiers || undefined;
            // this.popoverDirective.popperOnHidden = step.popperSettings.popperOnHidden || undefined;
            // this.popoverDirective.popperOnShown = step.popperSettings.popperOnShown || undefined;
        }
        this.popoverDirective.initialize();
        if (step.hasOwnProperty('popperSettings') && step.popperSettings.hasOwnProperty('showDelay')) {
            this.popoverDirective.scheduledShow();
        }
        else {
            this.popoverDirective.show();
        }
        if (!step.preventScrolling) {
            if (!withinviewport(this.element.nativeElement, { sides: 'bottom' })) {
                ((/** @type {?} */ (this.element.nativeElement))).scrollIntoView(false);
            }
            else if (!withinviewport(this.element.nativeElement, { sides: 'left top right' })) {
                ((/** @type {?} */ (this.element.nativeElement))).scrollIntoView(true);
            }
        }
    };
    /**
     * @return {?}
     */
    TourAnchorNgxPopperDirective.prototype.hideTourStep = /**
     * @return {?}
     */
    function () {
        this.isActive = false;
        this.popoverDirective.hide();
    };
    TourAnchorNgxPopperDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tourAnchor]',
                },] }
    ];
    /** @nocollapse */
    TourAnchorNgxPopperDirective.ctorParameters = function () { return [
        { type: NgxpTourService },
        { type: TourStepTemplateService },
        { type: ElementRef },
        { type: TourAnchorNgxPopperPopoverDirective, decorators: [{ type: Host }] }
    ]; };
    TourAnchorNgxPopperDirective.propDecorators = {
        tourAnchor: [{ type: Input }],
        isActive: [{ type: HostBinding, args: ['class.touranchor--is-active',] }]
    };
    return TourAnchorNgxPopperDirective;
}());
export { TourAnchorNgxPopperDirective };
if (false) {
    /** @type {?} */
    TourAnchorNgxPopperDirective.prototype.tourAnchor;
    /** @type {?} */
    TourAnchorNgxPopperDirective.prototype.isActive;
    /**
     * @type {?}
     * @private
     */
    TourAnchorNgxPopperDirective.prototype.tourService;
    /**
     * @type {?}
     * @private
     */
    TourAnchorNgxPopperDirective.prototype.tourStepTemplate;
    /**
     * @type {?}
     * @private
     */
    TourAnchorNgxPopperDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    TourAnchorNgxPopperDirective.prototype.popoverDirective;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1hbmNob3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXRvdXItbmd4LXBvcHBlci8iLCJzb3VyY2VzIjpbImxpYi90b3VyLWFuY2hvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDbkcsT0FBTyxFQUFtQixnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXJGLE9BQU8sY0FBYyxNQUFNLGdCQUFnQixDQUFDO0FBRTVDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUd2RTtJQUN5RCwrREFBZ0I7SUFEekU7O0lBU0EsQ0FBQztJQVBDLG9GQUFvRjs7Ozs7SUFDcEYsc0RBQVE7Ozs7O0lBQVIsY0FBWSxDQUFDO0lBRWIsb0VBQW9FOzs7OztJQUNwRSx3REFBVTs7Ozs7SUFBVjtRQUNFLGlCQUFNLFFBQVEsV0FBRSxDQUFDO0lBQ25CLENBQUM7O2dCQVJGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUM7O0lBU3RDLDBDQUFDO0NBQUEsQUFURCxDQUN5RCxnQkFBZ0IsR0FReEU7U0FSWSxtQ0FBbUM7QUFVaEQ7SUFTRSxzQ0FBb0IsV0FBNEIsRUFDNUIsZ0JBQXlDLEVBQ3pDLE9BQW1CLEVBQ1gsZ0JBQXFEO1FBSDdELGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtRQUM1QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXlCO1FBQ3pDLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDWCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXFDO0lBRWpGLENBQUM7Ozs7SUFFTSwrQ0FBUTs7O0lBQWY7UUFDRSxJQUFJLENB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Qy9CLENBQUM7O2dCQTdFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCOzs7O2dCQWpCUSxlQUFlO2dCQUNmLHVCQUF1QjtnQkFOWixVQUFVO2dCQWdDa0IsbUNBQW1DLHVCQUFwRSxJQUFJOzs7NkJBUmhCLEtBQUs7MkJBRUwsV0FBVyxTQUFDLDZCQUE2Qjs7SUF3RTVDLG1DQUFDO0NBQUEsQUE5RUQsSUE4RUM7U0EzRVksNEJBQTRCOzs7SUFDdkMsa0RBQW1DOztJQUVuQyxnREFDeUI7Ozs7O0lBRWIsbURBQW9DOzs7OztJQUNwQyx3REFBaUQ7Ozs7O0lBQ2pELCtDQUEyQjs7Ozs7SUFDM0Isd0RBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0LCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hQb3BwZXJNb2R1bGUsIFBvcHBlckNvbnRyb2xsZXIsIFBsYWNlbWVudHMsIFRyaWdnZXJzIH0gZnJvbSAnbmd4LXBvcHBlcic7XG5pbXBvcnQgeyBUb3VyQW5jaG9yRGlyZWN0aXZlIH0gZnJvbSAnbmd4LXRvdXItY29yZSc7XG5pbXBvcnQgd2l0aGludmlld3BvcnQgZnJvbSAnd2l0aGludmlld3BvcnQnO1xuXG5pbXBvcnQgeyBOZ3hwVG91clNlcnZpY2UgfSBmcm9tICcuL25neC1wb3BwZXItdG91ci5zZXJ2aWNlJztcbmltcG9ydCB7IFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi90b3VyLXN0ZXAtdGVtcGxhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBJTmd4cFN0ZXBPcHRpb24gYXMgSVN0ZXBPcHRpb24gfSBmcm9tICcuL3N0ZXAtb3B0aW9uLmludGVyZmFjZSc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1t0b3VyQW5jaG9yXSd9KVxuZXhwb3J0IGNsYXNzIFRvdXJBbmNob3JOZ3hQb3BwZXJQb3BvdmVyRGlyZWN0aXZlIGV4dGVuZHMgUG9wcGVyQ29udHJvbGxlciBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vIE92ZXJ3cml0ZSBwYXJlbnQgbmdPbkluaXQgdG8gZG8gbm90aGluZyBzaW5jZSB0aGUgY29udGVudCBwcm9wZXJ0eSBpc24ndCBzZXQgeWV0LlxuICBuZ09uSW5pdCgpIHt9XG5cbiAgLy8gQ2FsbCB0aGlzIHRvIGluaXRpYWxpemUgdGhlIHBvcG92ZXIgb25jZSB0aGUgY29udGVudCBoYXMgYmVlbiBzZXRcbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0b3VyQW5jaG9yXScsXG59KVxuZXhwb3J0IGNsYXNzIFRvdXJBbmNob3JOZ3hQb3BwZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgVG91ckFuY2hvckRpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIHB1YmxpYyB0b3VyQW5jaG9yOiBzdHJpbmc7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50b3VyYW5jaG9yLS1pcy1hY3RpdmUnKVxuICBwdWJsaWMgaXNBY3RpdmU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0b3VyU2VydmljZTogTmd4cFRvdXJTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHRvdXJTdGVwVGVtcGxhdGU6IFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIEBIb3N0KCkgcHJpdmF0ZSBwb3BvdmVyRGlyZWN0aXZlOiBUb3VyQW5jaG9yTmd4UG9wcGVyUG9wb3ZlckRpcmVjdGl2ZSxcbiAgKSB7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50b3VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnRvdXJBbmNob3IsIHRoaXMpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudG91clNlcnZpY2UudW5yZWdpc3Rlcih0aGlzLnRvdXJBbmNob3IpO1xuICB9XG5cbiAgcHVibGljIHNob3dUb3VyU3RlcChzdGVwOiBJU3RlcE9wdGlvbik6IHZvaWQge1xuICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMudG91clN0ZXBUZW1wbGF0ZS50ZW1wbGF0ZUNvbXBvbmVudC5zdGVwID0gc3RlcDtcbiAgICBzdGVwLnByZXZCdG5UaXRsZSA9IHN0ZXAucHJldkJ0blRpdGxlIHx8ICdQcmV2JztcbiAgICBzdGVwLm5leHRCdG5UaXRsZSA9IHN0ZXAubmV4dEJ0blRpdGxlIHx8ICdOZXh0JztcbiAgICBzdGVwLmVuZEJ0blRpdGxlID0gc3RlcC5lbmRCdG5UaXRsZSB8fCAnRW5kJztcbiAgICBcbiAgICB0aGlzLnBvcG92ZXJEaXJlY3RpdmUuY29udGVudCA9IHRoaXMudG91clN0ZXBUZW1wbGF0ZS50ZW1wbGF0ZTtcbiAgICB0aGlzLnBvcG92ZXJEaXJlY3RpdmUudGFyZ2V0RWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMucG9wb3ZlckRpcmVjdGl2ZS5wbGFjZW1lbnQgPSBzdGVwLnBsYWNlbWVudCB8fCBQbGFjZW1lbnRzLkF1dG87XG4gICAgdGhpcy5wb3BvdmVyRGlyZWN0aXZlLnNob3dUcmlnZ2VyID0gVHJpZ2dlcnMuTk9ORTtcblxuICAgIGlmKHN0ZXAucG9wcGVyU2V0dGluZ3Mpe1xuICAgICAgdGhpcy5wb3BvdmVyRGlyZWN0aXZlLmJvdW5kYXJpZXNFbGVtZW50ID0gc3RlcC5wb3BwZXJTZXR0aW5ncy5ib3VuZGFyaWVzRWxlbWVudCB8fCB1bmRlZmluZWQ7XG4gICAgICB0aGlzLnBvcG92ZXJEaXJlY3RpdmUuY2xvc2VPbkNsaWNrT3V0c2lkZSA9IHN0ZXAucG9wcGVyU2V0dGluZ3MuY2xvc2VPbkNsaWNrT3V0c2lkZSB8fCBmYWxzZTtcbiAgICAgIHRoaXMucG9wb3ZlckRpcmVjdGl2ZS5kaXNhYmxlQW5pbWF0aW9uID0gc3RlcC5wb3BwZXJTZXR0aW5ncy5kaXNhYmxlQW5pbWF0aW9uIHx8IGZhbHNlO1xuICAgICAgdGhpcy5wb3BvdmVyRGlyZWN0aXZlLmRpc2FibGVkID0gc3RlcC5wb3BwZXJTZXR0aW5ncy5kaXNhYmxlZCB8fCBmYWxzZTtcbiAgICAgIHRoaXMucG9wb3ZlckRpcmVjdGl2ZS5kaXNhYmxlU3R5bGUgPSBzdGVwLnBvcHBlclNldHRpbmdzLmRpc2FibGVTdHlsZSB8fCBmYWxzZTtcbiAgICAgIHRoaXMucG9wb3ZlckRpcmVjdGl2ZS5mb3JjZURldGVjdGlvbiA9IHN0ZXAucG9wcGVyU2V0dGluZ3MuZm9yY2VEZXRlY3Rpb24gfHwgZmFsc2U7XG4gICAgICB0aGlzLnBvcG92ZXJEaXJlY3RpdmUuaGlkZU9uQ2xpY2tPdXRzaWRlID0gc3RlcC5wb3BwZXJTZXR0aW5ncy5oaWRlT25DbGlja091dHNpZGUgfHwgZmFsc2U7XG4gICAgICB0aGlzLnBvcG92ZXJEaXJlY3RpdmUuaGlkZU9uU2Nyb2xsID0gc3RlcC5wb3BwZXJTZXR0aW5ncy5oaWRlT25TY3JvbGwgfHwgZmFsc2U7XG4gICAgICB0aGlzLnBvcG92ZXJEaXJlY3RpdmUuaGlkZVRpbWVvdXQgPSBzdGVwLnBvcHBlclNldHRpbmdzLmhpZGVUaW1lb3V0IHx8IDA7XG4gICAgICB0aGlzLnBvcG92ZXJEaXJlY3RpdmUucG9zaXRpb25GaXhlZCA9IHN0ZXAucG9wcGVyU2V0dGluZ3MucG9zaXRpb25GaXhlZCB8fCBmYWxzZTtcbiAgICAgIHRoaXMucG9wb3ZlckRpcmVjdGl2ZS5zaG93RGVsYXkgPSBzdGVwLnBvcHBlclNldHRpbmdzLnNob3dEZWxheSB8fCAwO1xuICAgICAgdGhpcy5wb3BvdmVyRGlyZWN0aXZlLnNob3dPblN0YXJ0ID0gc3RlcC5wb3BwZXJTZXR0aW5ncy5zaG93T25TdGFydCB8fCBmYWxzZTtcbiAgICAgIHRoaXMucG9wb3ZlckRpcmVjdGl2ZS5zaG93VHJpZ2dlciA9IHN0ZXAucG9wcGVyU2V0dGluZ3Muc2hvd1RyaWdnZXIgfHwgVHJpZ2dlcnMuTk9ORTtcbiAgICAgIHRoaXMucG9wb3ZlckRpcmVjdGl2ZS50aW1lb3V0QWZ0ZXJTaG93ID0gc3RlcC5wb3BwZXJTZXR0aW5ncy50aW1lb3V0QWZ0ZXJTaG93IHx8IDA7XG5cbiAgICAgIC8vVE9ETzogQ2FuIHRoZXNlIGV2ZW4gZ2V0IHBhc3NlZCBpbiB2aWEganNvbj9cbiAgICAgIC8vIHRoaXMucG9wb3ZlckRpcmVjdGl2ZS5wb3BwZXJNb2RpZmllcnMgPSBzdGVwLnBvcHBlclNldHRpbmdzLnBvcHBlck1vZGlmaWVycyB8fCB1bmRlZmluZWQ7XG4gICAgICAvLyB0aGlzLnBvcG92ZXJEaXJlY3RpdmUucG9wcGVyT25IaWRkZW4gPSBzdGVwLnBvcHBlclNldHRpbmdzLnBvcHBlck9uSGlkZGVuIHx8IHVuZGVmaW5lZDtcbiAgICAgIC8vIHRoaXMucG9wb3ZlckRpcmVjdGl2ZS5wb3BwZXJPblNob3duID0gc3RlcC5wb3BwZXJTZXR0aW5ncy5wb3BwZXJPblNob3duIHx8IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB0aGlzLnBvcG92ZXJEaXJlY3RpdmUuaW5pdGlhbGl6ZSgpO1xuICAgIGlmIChzdGVwLmhhc093blByb3BlcnR5KCdwb3BwZXJTZXR0aW5ncycpICYmIHN0ZXAucG9wcGVyU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoJ3Nob3dEZWxheScpKSB7XG4gICAgICB0aGlzLnBvcG92ZXJEaXJlY3RpdmUuc2NoZWR1bGVkU2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBvcG92ZXJEaXJlY3RpdmUuc2hvdygpO1xuICAgIH1cblxuICAgIGlmICghc3RlcC5wcmV2ZW50U2Nyb2xsaW5nKSB7XG4gICAgICBpZiAoIXdpdGhpbnZpZXdwb3J0KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB7IHNpZGVzOiAnYm90dG9tJyB9KSkge1xuICAgICAgICAoPEhUTUxFbGVtZW50PnRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KS5zY3JvbGxJbnRvVmlldyhmYWxzZSk7XG4gICAgICB9IGVsc2UgaWYgKCF3aXRoaW52aWV3cG9ydCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgeyBzaWRlczogJ2xlZnQgdG9wIHJpZ2h0JyB9KSkge1xuICAgICAgICAoPEhUTUxFbGVtZW50PnRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KS5zY3JvbGxJbnRvVmlldyh0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGlkZVRvdXJTdGVwKCk6IHZvaWQge1xuICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnBvcG92ZXJEaXJlY3RpdmUuaGlkZSgpO1xuICB9XG59XG4iXX0=