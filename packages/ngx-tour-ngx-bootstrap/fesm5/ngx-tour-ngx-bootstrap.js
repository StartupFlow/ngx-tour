import { __extends, __spread } from 'tslib';
import { Injectable, Directive, ElementRef, Host, Input, HostBinding, Component, ViewEncapsulation, ViewChild, TemplateRef, ContentChild, NgModule } from '@angular/core';
import { TourService, TourHotkeyListenerComponent, TourModule } from 'ngx-tour-core';
import { CommonModule } from '@angular/common';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { PopoverDirective } from 'ngx-bootstrap';
import withinviewport from 'withinviewport';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxbTourService = /** @class */ (function (_super) {
    __extends(NgxbTourService, _super);
    function NgxbTourService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgxbTourService.decorators = [
        { type: Injectable }
    ];
    return NgxbTourService;
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
var TourAnchorNgxBootstrapPopoverDirective = /** @class */ (function (_super) {
    __extends(TourAnchorNgxBootstrapPopoverDirective, _super);
    function TourAnchorNgxBootstrapPopoverDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TourAnchorNgxBootstrapPopoverDirective.decorators = [
        { type: Directive, args: [{ selector: '[tourAnchor]' },] }
    ];
    return TourAnchorNgxBootstrapPopoverDirective;
}(PopoverDirective));
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
        { type: NgxbTourService }
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
var TourNgxBootstrapModule = /** @class */ (function () {
    function TourNgxBootstrapModule() {
    }
    /**
     * @return {?}
     */
    TourNgxBootstrapModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TourNgxBootstrapModule,
            providers: __spread([
                TourStepTemplateService
            ], TourModule.forRoot().providers, [
                NgxbTourService,
            ]),
        };
    };
    TourNgxBootstrapModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TourAnchorNgxBootstrapDirective, TourAnchorNgxBootstrapPopoverDirective, TourStepTemplateComponent],
                    exports: [TourAnchorNgxBootstrapDirective, TourAnchorNgxBootstrapPopoverDirective, TourStepTemplateComponent],
                    imports: [CommonModule, PopoverModule.forRoot()],
                },] }
    ];
    return TourNgxBootstrapModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TourAnchorNgxBootstrapDirective, TourNgxBootstrapModule, NgxbTourService as TourService, TourStepTemplateComponent, NgxbTourService as ɵa, TourAnchorNgxBootstrapPopoverDirective as ɵb, TourStepTemplateService as ɵc };
//# sourceMappingURL=ngx-tour-ngx-bootstrap.js.map
