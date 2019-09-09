/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TourService } from 'ngx-tour-core';
import { Directive, Input } from '@angular/core';
var TourAnchorConsoleDirective = /** @class */ (function () {
    function TourAnchorConsoleDirective(tourService) {
        this.tourService = tourService;
    }
    /**
     * @return {?}
     */
    TourAnchorConsoleDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.tourService.register(this.tourAnchor, this);
    };
    /**
     * @return {?}
     */
    TourAnchorConsoleDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.tourService.unregister(this.tourAnchor);
    };
    /**
     * @param {?} step
     * @return {?}
     */
    TourAnchorConsoleDirective.prototype.showTourStep = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
        console.group(step.title);
        console.log(step.content);
        console.log((step.placement || 'above') + " " + this.tourAnchor);
        console.groupEnd();
    };
    /**
     * @return {?}
     */
    TourAnchorConsoleDirective.prototype.hideTourStep = /**
     * @return {?}
     */
    function () {
        return;
    };
    TourAnchorConsoleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tourAnchor]',
                },] }
    ];
    /** @nocollapse */
    TourAnchorConsoleDirective.ctorParameters = function () { return [
        { type: TourService }
    ]; };
    TourAnchorConsoleDirective.propDecorators = {
        tourAnchor: [{ type: Input }]
    };
    return TourAnchorConsoleDirective;
}());
export { TourAnchorConsoleDirective };
if (false) {
    /** @type {?} */
    TourAnchorConsoleDirective.prototype.tourAnchor;
    /**
     * @type {?}
     * @private
     */
    TourAnchorConsoleDirective.prototype.tourService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1hbmNob3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXRvdXItY29uc29sZS8iLCJzb3VyY2VzIjpbImxpYi90b3VyLWFuY2hvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBdUIsV0FBVyxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQzlFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUVwRTtJQU1FLG9DQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFHLENBQUM7Ozs7SUFFekMsNkNBQVE7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRU0sZ0RBQVc7OztJQUFsQjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7OztJQUVNLGlEQUFZOzs7O0lBQW5CLFVBQW9CLElBQWlCO1FBQ25DLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLE9BQU8sVUFBSSxJQUFJLENBQUMsVUFBWSxDQUFDLENBQUM7UUFDL0QsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFTSxpREFBWTs7O0lBQW5CO1FBQ0UsT0FBTztJQUNULENBQUM7O2dCQXpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCOzs7O2dCQUw2QixXQUFXOzs7NkJBT3RDLEtBQUs7O0lBc0JSLGlDQUFDO0NBQUEsQUExQkQsSUEwQkM7U0F2QlksMEJBQTBCOzs7SUFDckMsZ0RBQW1DOzs7OztJQUV2QixpREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb3VyQW5jaG9yRGlyZWN0aXZlLCBUb3VyU2VydmljZSwgSVN0ZXBPcHRpb24gfSBmcm9tICduZ3gtdG91ci1jb3JlJztcbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0b3VyQW5jaG9yXScsXG59KVxuZXhwb3J0IGNsYXNzIFRvdXJBbmNob3JDb25zb2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIFRvdXJBbmNob3JEaXJlY3RpdmUge1xuICBASW5wdXQoKSBwdWJsaWMgdG91ckFuY2hvcjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdG91clNlcnZpY2U6IFRvdXJTZXJ2aWNlKSB7fVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRvdXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudG91ckFuY2hvciwgdGhpcyk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy50b3VyU2VydmljZS51bnJlZ2lzdGVyKHRoaXMudG91ckFuY2hvcik7XG4gIH1cblxuICBwdWJsaWMgc2hvd1RvdXJTdGVwKHN0ZXA6IElTdGVwT3B0aW9uKTogdm9pZCB7XG4gICAgY29uc29sZS5ncm91cChzdGVwLnRpdGxlKTtcbiAgICBjb25zb2xlLmxvZyhzdGVwLmNvbnRlbnQpO1xuICAgIGNvbnNvbGUubG9nKGAke3N0ZXAucGxhY2VtZW50IHx8ICdhYm92ZSd9ICR7dGhpcy50b3VyQW5jaG9yfWApO1xuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgfVxuXG4gIHB1YmxpYyBoaWRlVG91clN0ZXAoKTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=