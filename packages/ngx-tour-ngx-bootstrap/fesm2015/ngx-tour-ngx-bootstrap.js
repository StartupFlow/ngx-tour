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
class NgxbTourService extends TourService {
}
NgxbTourService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TourStepTemplateService {
}
TourStepTemplateService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    TourStepTemplateService.prototype.template;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TourAnchorNgxBootstrapPopoverDirective extends PopoverDirective {
}
TourAnchorNgxBootstrapPopoverDirective.decorators = [
    { type: Directive, args: [{ selector: '[tourAnchor]' },] }
];
class TourAnchorNgxBootstrapDirective {
    /**
     * @param {?} tourService
     * @param {?} tourStepTemplate
     * @param {?} element
     * @param {?} popoverDirective
     */
    constructor(tourService, tourStepTemplate, element, popoverDirective) {
        this.tourService = tourService;
        this.tourStepTemplate = tourStepTemplate;
        this.element = element;
        this.popoverDirective = popoverDirective;
        this.popoverDirective.triggers = '';
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
        this.isActive = true;
        this.popoverDirective.popover = this.tourStepTemplate.template;
        this.popoverDirective.popoverContext = { step };
        this.popoverDirective.popoverTitle = step.title;
        this.popoverDirective.container = 'body';
        this.popoverDirective.containerClass = 'ngx-bootstrap';
        if (step.containerClass) {
            this.popoverDirective.containerClass += ` ${step.containerClass}`;
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
    }
    /**
     * @return {?}
     */
    hideTourStep() {
        this.isActive = false;
        this.popoverDirective.hide();
    }
}
TourAnchorNgxBootstrapDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tourAnchor]'
            },] }
];
/** @nocollapse */
TourAnchorNgxBootstrapDirective.ctorParameters = () => [
    { type: NgxbTourService },
    { type: TourStepTemplateService },
    { type: ElementRef },
    { type: TourAnchorNgxBootstrapPopoverDirective, decorators: [{ type: Host }] }
];
TourAnchorNgxBootstrapDirective.propDecorators = {
    tourAnchor: [{ type: Input }],
    isActive: [{ type: HostBinding, args: ['class.touranchor--is-active',] }]
};
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
class TourStepTemplateComponent extends TourHotkeyListenerComponent {
    /**
     * @param {?} tourStepTemplateService
     * @param {?} tourService
     */
    constructor(tourStepTemplateService, tourService) {
        super(tourService);
        this.tourStepTemplateService = tourStepTemplateService;
        this.tourService = tourService;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.tourStepTemplateService.template = this.stepTemplate || this.defaultTourStepTemplate;
    }
}
TourStepTemplateComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                selector: 'tour-step-template',
                template: `
    <ng-template #tourStep let-step="step">
      <p class="tour-step-content">{{step?.content}}</p>
      <div class="tour-step-navigation">
        <button *ngIf="tourService.hasPrev(step)" class="btn btn-sm btn-default" (click)="tourService.prev()">« {{step?.prevBtnTitle}}</button>
        <button *ngIf="tourService.hasNext(step)" class="btn btn-sm btn-default" (click)="tourService.next()">{{step?.nextBtnTitle}} »</button>
        <button class="btn btn-sm btn-default" (click)="tourService.end()">{{step?.endBtnTitle}}</button>
      </div>
    </ng-template>
  `
            }] }
];
/** @nocollapse */
TourStepTemplateComponent.ctorParameters = () => [
    { type: TourStepTemplateService },
    { type: NgxbTourService }
];
TourStepTemplateComponent.propDecorators = {
    defaultTourStepTemplate: [{ type: ViewChild, args: ['tourStep', { read: TemplateRef, static: true },] }],
    stepTemplate: [{ type: Input }, { type: ContentChild, args: [TemplateRef, { static: true },] }]
};
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
class TourNgxBootstrapModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: TourNgxBootstrapModule,
            providers: [
                TourStepTemplateService,
                ...TourModule.forRoot().providers,
                NgxbTourService,
            ],
        };
    }
}
TourNgxBootstrapModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TourAnchorNgxBootstrapDirective, TourAnchorNgxBootstrapPopoverDirective, TourStepTemplateComponent],
                exports: [TourAnchorNgxBootstrapDirective, TourAnchorNgxBootstrapPopoverDirective, TourStepTemplateComponent],
                imports: [CommonModule, PopoverModule.forRoot()],
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

export { TourAnchorNgxBootstrapDirective, TourNgxBootstrapModule, NgxbTourService as TourService, TourStepTemplateComponent, NgxbTourService as ɵa, TourAnchorNgxBootstrapPopoverDirective as ɵb, TourStepTemplateService as ɵc };
//# sourceMappingURL=ngx-tour-ngx-bootstrap.js.map
