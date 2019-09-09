import { __extends, __spread } from 'tslib';
import { Injectable, Directive, ElementRef, Host, Input, HostBinding, Component, ViewEncapsulation, ViewChild, TemplateRef, ContentChild, NgModule } from '@angular/core';
import { TourService, TourHotkeyListenerComponent, TourModule } from 'ngx-tour-core';
import { CommonModule } from '@angular/common';
import { NgbPopover, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import withinviewport from 'withinviewport';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgbTourService = /** @class */ (function (_super) {
    __extends(NgbTourService, _super);
    function NgbTourService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbTourService.decorators = [
        { type: Injectable }
    ];
    return NgbTourService;
}(TourService));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TourStepTemplateService = /** @class */ (function () {
    function TourStepTemplateService() {
    }
    TourStepTemplateService.decorators = [
        { type: Injectable }
    ];
    return TourStepTemplateService;
}());
if (false) {
    /** @type {?} */
    TourStepTemplateService.prototype.template;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TourAnchorNgBootstrapPopoverDirective = /** @class */ (function (_super) {
    __extends(TourAnchorNgBootstrapPopoverDirective, _super);
    function TourAnchorNgBootstrapPopoverDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TourAnchorNgBootstrapPopoverDirective.decorators = [
        { type: Directive, args: [{ selector: '[tourAnchor]' },] }
    ];
    return TourAnchorNgBootstrapPopoverDirective;
}(NgbPopover));
var TourAnchorNgBootstrapDirective = /** @class */ (function () {
    function TourAnchorNgBootstrapDirective(tourService, tourStepTemplate, element, popoverDirective) {
        this.tourService = tourService;
        this.tourStepTemplate = tourStepTemplate;
        this.element = element;
        this.popoverDirective = popoverDirective;
        this.popoverDirective.toggle = (/**
         * @return {?}
         */
        function () { });
    }
    /**
     * @return {?}
     */
    TourAnchorNgBootstrapDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.tourService.register(this.tourAnchor, this);
    };
    /**
     * @return {?}
     */
    TourAnchorNgBootstrapDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.tourService.unregister(this.tourAnchor);
    };
    /**
     * @param {?} step
     * @return {?}
     */
    TourAnchorNgBootstrapDirective.prototype.showTourStep = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
        this.isActive = true;
        this.popoverDirective.ngbPopover = this.tourStepTemplate.template;
        this.popoverDirective.popoverTitle = step.title;
        this.popoverDirective.container = 'body';
        this.popoverDirective.placement = (/** @type {?} */ ((step.placement || 'top')
            .replace('before', 'left').replace('after', 'right')
            .replace('below', 'bottom').replace('above', 'top')));
        step.prevBtnTitle = step.prevBtnTitle || 'Prev';
        step.nextBtnTitle = step.nextBtnTitle || 'Next';
        step.endBtnTitle = step.endBtnTitle || 'End';
        this.popoverDirective.open({ step: step });
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
    TourAnchorNgBootstrapDirective.prototype.hideTourStep = /**
     * @return {?}
     */
    function () {
        this.isActive = false;
        this.popoverDirective.close();
    };
    TourAnchorNgBootstrapDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tourAnchor]',
                },] }
    ];
    /** @nocollapse */
    TourAnchorNgBootstrapDirective.ctorParameters = function () { return [
        { type: NgbTourService },
        { type: TourStepTemplateService },
        { type: ElementRef },
        { type: TourAnchorNgBootstrapPopoverDirective, decorators: [{ type: Host }] }
    ]; };
    TourAnchorNgBootstrapDirective.propDecorators = {
        tourAnchor: [{ type: Input }],
        isActive: [{ type: HostBinding, args: ['class.touranchor--is-active',] }]
    };
    return TourAnchorNgBootstrapDirective;
}());
if (false) {
    /** @type {?} */
    TourAnchorNgBootstrapDirective.prototype.tourAnchor;
    /** @type {?} */
    TourAnchorNgBootstrapDirective.prototype.isActive;
    /**
     * @type {?}
     * @private
     */
    TourAnchorNgBootstrapDirective.prototype.tourService;
    /**
     * @type {?}
     * @private
     */
    TourAnchorNgBootstrapDirective.prototype.tourStepTemplate;
    /**
     * @type {?}
     * @private
     */
    TourAnchorNgBootstrapDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    TourAnchorNgBootstrapDirective.prototype.popoverDirective;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TourStepTemplateComponent = /** @class */ (function (_super) {
    __extends(TourStepTemplateComponent, _super);
    function TourStepTemplateComponent(tourStepTemplateService, tourService) {
        var _this = _super.call(this, tourService) || this;
        _this.tourStepTemplateService = tourStepTemplateService;
        _this.tourService = tourService;
        return _this;
    }
    /**
     * @return {?}
     */
    TourStepTemplateComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.tourStepTemplateService.template = this.stepTemplate || this.defaultTourStepTemplate;
    };
    TourStepTemplateComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    selector: 'tour-step-template',
                    template: "\n    <ng-template #tourStep let-step=\"step\">\n      <p class=\"tour-step-content\">{{step?.content}}</p>\n      <div class=\"tour-step-navigation\">\n        <button *ngIf=\"tourService.hasPrev(step)\" class=\"btn btn-sm btn-default\" (click)=\"tourService.prev()\">\u00AB {{step?.prevBtnTitle}}</button>\n        <button *ngIf=\"tourService.hasNext(step)\" class=\"btn btn-sm btn-default\" (click)=\"tourService.next()\">{{step?.nextBtnTitle}} \u00BB</button>\n        <button class=\"btn btn-sm btn-default\" (click)=\"tourService.end()\">{{step?.endBtnTitle}}</button>\n      </div>\n    </ng-template>\n  "
                }] }
    ];
    /** @nocollapse */
    TourStepTemplateComponent.ctorParameters = function () { return [
        { type: TourStepTemplateService },
        { type: NgbTourService }
    ]; };
    TourStepTemplateComponent.propDecorators = {
        defaultTourStepTemplate: [{ type: ViewChild, args: ['tourStep', { read: TemplateRef, static: true },] }],
        stepTemplate: [{ type: Input }, { type: ContentChild, args: [TemplateRef, { static: true },] }]
    };
    return TourStepTemplateComponent;
}(TourHotkeyListenerComponent));
if (false) {
    /** @type {?} */
    TourStepTemplateComponent.prototype.defaultTourStepTemplate;
    /** @type {?} */
    TourStepTemplateComponent.prototype.stepTemplate;
    /**
     * @type {?}
     * @private
     */
    TourStepTemplateComponent.prototype.tourStepTemplateService;
    /** @type {?} */
    TourStepTemplateComponent.prototype.tourService;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TourNgBootstrapModule = /** @class */ (function () {
    function TourNgBootstrapModule() {
    }
    /**
     * @return {?}
     */
    TourNgBootstrapModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TourNgBootstrapModule,
            providers: __spread([
                TourStepTemplateService
            ], TourModule.forRoot().providers, [
                NgbTourService
            ]),
        };
    };
    TourNgBootstrapModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TourAnchorNgBootstrapDirective, TourAnchorNgBootstrapPopoverDirective, TourStepTemplateComponent],
                    exports: [TourAnchorNgBootstrapDirective, TourAnchorNgBootstrapPopoverDirective, TourStepTemplateComponent],
                    imports: [CommonModule, NgbPopoverModule.forRoot()],
                },] }
    ];
    return TourNgBootstrapModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TourAnchorNgBootstrapDirective, TourNgBootstrapModule, NgbTourService as TourService, TourStepTemplateComponent, NgbTourService as ɵa, TourAnchorNgBootstrapPopoverDirective as ɵb, TourStepTemplateService as ɵc };
//# sourceMappingURL=ngx-tour-ng-bootstrap.js.map
