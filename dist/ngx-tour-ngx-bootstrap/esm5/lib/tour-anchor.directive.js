/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Host, HostBinding, Input } from '@angular/core';
import { PopoverDirective } from 'ngx-bootstrap';
import withinviewport from 'withinviewport';
import { NgxbTourService } from './ngx-bootstrap-tour.service';
import { TourStepTemplateService } from './tour-step-template.service';
var TourAnchorNgxBootstrapPopoverDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TourAnchorNgxBootstrapPopoverDirective, _super);
    function TourAnchorNgxBootstrapPopoverDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TourAnchorNgxBootstrapPopoverDirective.decorators = [
        { type: Directive, args: [{ selector: '[tourAnchor]' },] }
    ];
    return TourAnchorNgxBootstrapPopoverDirective;
}(PopoverDirective));
export { TourAnchorNgxBootstrapPopoverDirective };
var TourAnchorNgxBootstrapDirective = /** @class */ (function () {
    function TourAnchorNgxBootstrapDirective(tourService, tourStepTemplate, element, popoverDirective) {
        this.tourService = tourService;
        this.tourStepTemplate = tourStepTemplate;
        this.element = element;
        this.popoverDirective = popoverDirective;
        this.popoverDirective.triggers = '';
    }
    /**
     * @return {?}
     */
    TourAnchorNgxBootstrapDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.tourService.register(this.tourAnchor, this);
    };
    /**
     * @return {?}
     */
    TourAnchorNgxBootstrapDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.tourService.unregister(this.tourAnchor);
    };
    /**
     * @param {?} step
     * @return {?}
     */
    TourAnchorNgxBootstrapDirective.prototype.showTourStep = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
        this.isActive = true;
        this.popoverDirective.popover = this.tourStepTemplate.template;
        this.popoverDirective.popoverContext = { step: step };
        this.popoverDirective.popoverTitle = step.title;
        this.popoverDirective.container = 'body';
        this.popoverDirective.containerClass = 'ngx-bootstrap';
        if (step.containerClass) {
            this.popoverDirective.containerClass += " " + step.containerClass;
        }
        this.popoverDirective.placement = step.placement || 'top';
        step.prevBtnTitle = step.prevBtnTitle || 'Prev';
        step.nextBtnTitle = step.nextBtnTitle || 'Next';
        step.endBtnTitle = step.endBtnTitle || 'End';
        this.popoverDirective.show();
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
    TourAnchorNgxBootstrapDirective.prototype.hideTourStep = /**
     * @return {?}
     */
    function () {
        this.isActive = false;
        this.popoverDirective.hide();
    };
    TourAnchorNgxBootstrapDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tourAnchor]'
                },] }
    ];
    /** @nocollapse */
    TourAnchorNgxBootstrapDirective.ctorParameters = function () { return [
        { type: NgxbTourService },
        { type: TourStepTemplateService },
        { type: ElementRef },
        { type: TourAnchorNgxBootstrapPopoverDirective, decorators: [{ type: Host }] }
    ]; };
    TourAnchorNgxBootstrapDirective.propDecorators = {
        tourAnchor: [{ type: Input }],
        isActive: [{ type: HostBinding, args: ['class.touranchor--is-active',] }]
    };
    return TourAnchorNgxBootstrapDirective;
}());
export { TourAnchorNgxBootstrapDirective };
if (false) {
    /** @type {?} */
    TourAnchorNgxBootstrapDirective.prototype.tourAnchor;
    /** @type {?} */
    TourAnchorNgxBootstrapDirective.prototype.isActive;
    /**
     * @type {?}
     * @private
     */
    TourAnchorNgxBootstrapDirective.prototype.tourService;
    /**
     * @type {?}
     * @private
     */
    TourAnchorNgxBootstrapDirective.prototype.tourStepTemplate;
    /**
     * @type {?}
     * @private
     */
    TourAnchorNgxBootstrapDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    TourAnchorNgxBootstrapDirective.prototype.popoverDirective;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1hbmNob3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXRvdXItbmd4LWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi90b3VyLWFuY2hvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDbkcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2pELE9BQU8sY0FBYyxNQUFNLGdCQUFnQixDQUFDO0FBRTVDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RTtJQUM0RCxrRUFBZ0I7SUFENUU7O0lBQytFLENBQUM7O2dCQUQvRSxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFOztJQUN3Qyw2Q0FBQztDQUFBLEFBRGhGLENBQzRELGdCQUFnQixHQUFJO1NBQW5FLHNDQUFzQztBQUVuRDtJQVVFLHlDQUNVLFdBQTRCLEVBQzVCLGdCQUF5QyxFQUN6QyxPQUFtQixFQUNYLGdCQUF3RDtRQUhoRSxnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7UUFDNUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF5QjtRQUN6QyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ1gscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF3QztRQUV4RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRU0sa0RBQVE7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRU0scURBQVc7OztJQUFsQjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7OztJQUVNLHNEQUFZOzs7O0lBQW5CLFVBQW9CLElBQWlCO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztRQUMvRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxHQUFHLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDaEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsR0FBRyxlQUFlLENBQUM7UUFDdkQsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLElBQUksTUFBSSxJQUFJLENBQUMsY0FBZ0IsQ0FBQztTQUNuRTtRQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUM7UUFDMUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLE1BQU0sQ0FBQztRQUNoRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksTUFBTSxDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUM7UUFDN0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFO2dCQUNwRSxDQUFDLG1CQUFhLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFBLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDakU7aUJBQU0sSUFDTCxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLEVBQ3hFO2dCQUNBLENBQUMsbUJBQWEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNoRTtTQUNGO0lBQ0gsQ0FBQzs7OztJQUVNLHNEQUFZOzs7SUFBbkI7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7Z0JBeERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztpQkFDekI7Ozs7Z0JBUlEsZUFBZTtnQkFDZix1QkFBdUI7Z0JBUFosVUFBVTtnQkEwQlEsc0NBQXNDLHVCQUF2RSxJQUFJOzs7NkJBVE4sS0FBSzsyQkFFTCxXQUFXLFNBQUMsNkJBQTZCOztJQWtENUMsc0NBQUM7Q0FBQSxBQXpERCxJQXlEQztTQXREWSwrQkFBK0I7OztJQUUxQyxxREFBbUM7O0lBRW5DLG1EQUN5Qjs7Ozs7SUFHdkIsc0RBQW9DOzs7OztJQUNwQywyREFBaUQ7Ozs7O0lBQ2pELGtEQUEyQjs7Ozs7SUFDM0IsMkRBQXdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0LCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQb3BvdmVyRGlyZWN0aXZlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBUb3VyQW5jaG9yRGlyZWN0aXZlIH0gZnJvbSAnbmd4LXRvdXItY29yZSc7XG5pbXBvcnQgeyBJTmd4YlN0ZXBPcHRpb24gYXMgSVN0ZXBPcHRpb24gfSBmcm9tICcuL3N0ZXAtb3B0aW9uLmludGVyZmFjZSc7XG5pbXBvcnQgd2l0aGludmlld3BvcnQgZnJvbSAnd2l0aGludmlld3BvcnQnO1xuXG5pbXBvcnQgeyBOZ3hiVG91clNlcnZpY2UgfSBmcm9tICcuL25neC1ib290c3RyYXAtdG91ci5zZXJ2aWNlJztcbmltcG9ydCB7IFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi90b3VyLXN0ZXAtdGVtcGxhdGUuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1t0b3VyQW5jaG9yXScgfSlcbmV4cG9ydCBjbGFzcyBUb3VyQW5jaG9yTmd4Qm9vdHN0cmFwUG9wb3ZlckRpcmVjdGl2ZSBleHRlbmRzIFBvcG92ZXJEaXJlY3RpdmUgeyB9XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0b3VyQW5jaG9yXSdcbn0pXG5leHBvcnQgY2xhc3MgVG91ckFuY2hvck5neEJvb3RzdHJhcERpcmVjdGl2ZVxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBUb3VyQW5jaG9yRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgcHVibGljIHRvdXJBbmNob3I6IHN0cmluZztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRvdXJhbmNob3ItLWlzLWFjdGl2ZScpXG4gIHB1YmxpYyBpc0FjdGl2ZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRvdXJTZXJ2aWNlOiBOZ3hiVG91clNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0b3VyU3RlcFRlbXBsYXRlOiBUb3VyU3RlcFRlbXBsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgQEhvc3QoKSBwcml2YXRlIHBvcG92ZXJEaXJlY3RpdmU6IFRvdXJBbmNob3JOZ3hCb290c3RyYXBQb3BvdmVyRGlyZWN0aXZlXG4gICkge1xuICAgIHRoaXMucG9wb3ZlckRpcmVjdGl2ZS50cmlnZ2VycyA9ICcnO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudG91clNlcnZpY2UucmVnaXN0ZXIodGhpcy50b3VyQW5jaG9yLCB0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnRvdXJTZXJ2aWNlLnVucmVnaXN0ZXIodGhpcy50b3VyQW5jaG9yKTtcbiAgfVxuXG4gIHB1YmxpYyBzaG93VG91clN0ZXAoc3RlcDogSVN0ZXBPcHRpb24pOiB2b2lkIHtcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnBvcG92ZXJEaXJlY3RpdmUucG9wb3ZlciA9IHRoaXMudG91clN0ZXBUZW1wbGF0ZS50ZW1wbGF0ZTtcbiAgICB0aGlzLnBvcG92ZXJEaXJlY3RpdmUucG9wb3ZlckNvbnRleHQgPSB7IHN0ZXAgfTtcbiAgICB0aGlzLnBvcG92ZXJEaXJlY3RpdmUucG9wb3ZlclRpdGxlID0gc3RlcC50aXRsZTtcbiAgICB0aGlzLnBvcG92ZXJEaXJlY3RpdmUuY29udGFpbmVyID0gJ2JvZHknO1xuICAgIHRoaXMucG9wb3ZlckRpcmVjdGl2ZS5jb250YWluZXJDbGFzcyA9ICduZ3gtYm9vdHN0cmFwJztcbiAgICBpZiAoc3RlcC5jb250YWluZXJDbGFzcykge1xuICAgICAgdGhpcy5wb3BvdmVyRGlyZWN0aXZlLmNvbnRhaW5lckNsYXNzICs9IGAgJHtzdGVwLmNvbnRhaW5lckNsYXNzfWA7XG4gICAgfVxuICAgIHRoaXMucG9wb3ZlckRpcmVjdGl2ZS5wbGFjZW1lbnQgPSBzdGVwLnBsYWNlbWVudCB8fCAndG9wJztcbiAgICBzdGVwLnByZXZCdG5UaXRsZSA9IHN0ZXAucHJldkJ0blRpdGxlIHx8ICdQcmV2JztcbiAgICBzdGVwLm5leHRCdG5UaXRsZSA9IHN0ZXAubmV4dEJ0blRpdGxlIHx8ICdOZXh0JztcbiAgICBzdGVwLmVuZEJ0blRpdGxlID0gc3RlcC5lbmRCdG5UaXRsZSB8fCAnRW5kJztcbiAgICB0aGlzLnBvcG92ZXJEaXJlY3RpdmUuc2hvdygpO1xuICAgIGlmICghc3RlcC5wcmV2ZW50U2Nyb2xsaW5nKSB7XG4gICAgICBpZiAoIXdpdGhpbnZpZXdwb3J0KHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB7IHNpZGVzOiAnYm90dG9tJyB9KSkge1xuICAgICAgICAoPEhUTUxFbGVtZW50PnRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KS5zY3JvbGxJbnRvVmlldyhmYWxzZSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAhd2l0aGludmlld3BvcnQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHsgc2lkZXM6ICdsZWZ0IHRvcCByaWdodCcgfSlcbiAgICAgICkge1xuICAgICAgICAoPEhUTUxFbGVtZW50PnRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KS5zY3JvbGxJbnRvVmlldyh0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGlkZVRvdXJTdGVwKCk6IHZvaWQge1xuICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnBvcG92ZXJEaXJlY3RpdmUuaGlkZSgpO1xuICB9XG59XG4iXX0=