import { TourService, TourModule, TourHotkeyListenerComponent } from 'ngx-tour-core';
export { TourHotkeyListenerComponent, TourModule, TourService, TourState } from 'ngx-tour-core';
import { CommonModule } from '@angular/common';
import { Directive, Input, NgModule } from '@angular/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TourAnchorConsoleDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TourConsoleModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: TourConsoleModule,
            providers: [
                ...TourModule.forRoot().providers,
            ],
        };
    }
}
TourConsoleModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TourAnchorConsoleDirective],
                exports: [TourAnchorConsoleDirective, TourHotkeyListenerComponent],
                imports: [TourModule, CommonModule, NgbPopoverModule.forRoot()],
            },] }
];

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
