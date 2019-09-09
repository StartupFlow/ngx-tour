import { __extends, __spread } from 'tslib';
import { Injectable, Directive, ElementRef, Host, Input, HostBinding, Component, ViewEncapsulation, ViewChild, ContentChild, TemplateRef, NgModule } from '@angular/core';
import { TourService, TourHotkeyListenerComponent, TourModule } from 'ngx-tour-core';
import { CommonModule } from '@angular/common';
import { PopperController, Placements, Triggers, PopperContent, NgxPopperModule } from 'ngx-popper';
import withinviewport from 'withinviewport';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxpTourService = /** @class */ (function (_super) {
    __extends(NgxpTourService, _super);
    function NgxpTourService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgxpTourService.decorators = [
        { type: Injectable }
    ];
    return NgxpTourService;
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
    /** @type {?} */
    TourStepTemplateService.prototype.templateComponent;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TourAnchorNgxPopperPopoverDirective = /** @class */ (function (_super) {
    __extends(TourAnchorNgxPopperPopoverDirective, _super);
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
        _this.step = {};
        return _this;
    }
    /**
     * @return {?}
     */
    TourStepTemplateComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.tourStepTemplateService.templateComponent = this;
    };
    /**
     * @return {?}
     */
    TourStepTemplateComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.tourStepTemplateService.template = this.popperContent;
    };
    TourStepTemplateComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    selector: 'tour-step-template',
                    template: "\n    <popper-content class=\"popper-content\">\n      <ng-container *ngTemplateOutlet=\"stepTemplate || defaultTemplate; context: { step: step }\"></ng-container>\n    </popper-content>\n\n    <ng-template #defaultTemplate let-step=\"step\">\n      <p class=\"ngxp-title\">{{step?.title}}</p>\n      <p class=\"ngxp-content\">{{step?.content}}</p>\n      <div class=\"tour-step-navigation\">\n        <button [hidden]=\"!tourService.hasPrev(step)\" class=\"ngxp-btn btn-prev\" (click)=\"tourService.prev()\">\u00AB {{step?.prevBtnTitle}}</button>\n        <button [hidden]=\"!tourService.hasNext(step)\" class=\"ngxp-btn btn-next\" (click)=\"tourService.next()\">{{step?.nextBtnTitle}} \u00BB</button>\n        <button class=\"ngxp-btn btn-end\" (click)=\"tourService.end()\">{{step?.endBtnTitle}}</button>\n      </div>\n    </ng-template>\n  "
                }] }
    ];
    /** @nocollapse */
    TourStepTemplateComponent.ctorParameters = function () { return [
        { type: TourStepTemplateService },
        { type: NgxpTourService }
    ]; };
    TourStepTemplateComponent.propDecorators = {
        popperContent: [{ type: ViewChild, args: [PopperContent, { static: true },] }],
        stepTemplate: [{ type: Input }, { type: ContentChild, args: [TemplateRef, { static: true },] }]
    };
    return TourStepTemplateComponent;
}(TourHotkeyListenerComponent));
if (false) {
    /** @type {?} */
    TourStepTemplateComponent.prototype.popperContent;
    /** @type {?} */
    TourStepTemplateComponent.prototype.stepTemplate;
    /** @type {?} */
    TourStepTemplateComponent.prototype.step;
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
var TourNgxPopperModule = /** @class */ (function () {
    function TourNgxPopperModule() {
    }
    /**
     * @return {?}
     */
    TourNgxPopperModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TourNgxPopperModule,
            providers: __spread([
                TourStepTemplateService
            ], TourModule.forRoot().providers, [
                NgxpTourService,
            ]),
        };
    };
    TourNgxPopperModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TourAnchorNgxPopperDirective, TourAnchorNgxPopperPopoverDirective, TourStepTemplateComponent],
                    exports: [TourAnchorNgxPopperDirective, TourAnchorNgxPopperPopoverDirective, TourStepTemplateComponent],
                    imports: [CommonModule, NgxPopperModule.forRoot()],
                },] }
    ];
    return TourNgxPopperModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { TourAnchorNgxPopperDirective, TourNgxPopperModule, NgxpTourService as TourService, TourStepTemplateComponent, NgxpTourService as ɵa, TourAnchorNgxPopperPopoverDirective as ɵb, TourStepTemplateService as ɵc };
//# sourceMappingURL=ngx-tour-ngx-popper.js.map
