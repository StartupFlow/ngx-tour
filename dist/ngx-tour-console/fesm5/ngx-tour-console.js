import { TourService, TourModule, TourHotkeyListenerComponent } from 'ngx-tour-core';
export { TourHotkeyListenerComponent, TourModule, TourService, TourState } from 'ngx-tour-core';
import { __spread } from 'tslib';
import { CommonModule } from '@angular/common';
import { Directive, Input, NgModule } from '@angular/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
if (false) {
    /** @type {?} */
    TourAnchorConsoleDirective.prototype.tourAnchor;
    /**
     * @type {?}
     * @private
     */
    TourAnchorConsoleDirective.prototype.tourService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TourConsoleModule = /** @class */ (function () {
    function TourConsoleModule() {
    }
    /**
     * @return {?}
     */
    TourConsoleModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TourConsoleModule,
            providers: __spread(TourModule.forRoot().providers),
        };
    };
    TourConsoleModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TourAnchorConsoleDirective],
                    exports: [TourAnchorConsoleDirective, TourHotkeyListenerComponent],
                    imports: [TourModule, CommonModule, NgbPopoverModule.forRoot()],
                },] }
    ];
    return TourConsoleModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TourAnchorConsoleDirective, TourConsoleModule };
//# sourceMappingURL=ngx-tour-console.js.map
