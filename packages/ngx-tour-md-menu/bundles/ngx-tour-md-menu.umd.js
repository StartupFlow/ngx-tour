(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-tour-core'), require('@angular/material'), require('@angular/common'), require('withinviewport'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ngx-tour-md-menu', ['exports', '@angular/core', 'ngx-tour-core', '@angular/material', '@angular/common', 'withinviewport', 'rxjs/operators'], factory) :
    (global = global || self, factory(global['ngx-tour-md-menu'] = {}, global.ng.core, global.ngxTourCore, global.ng.material, global.ng.common, global.withinviewport, global.rxjs.operators));
}(this, function (exports, core, ngxTourCore, material, common, withinviewport, operators) { 'use strict';

    withinviewport = withinviewport && withinviewport.hasOwnProperty('default') ? withinviewport['default'] : withinviewport;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxmTourService = /** @class */ (function (_super) {
        __extends(NgxmTourService, _super);
        function NgxmTourService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NgxmTourService.decorators = [
            { type: core.Injectable }
        ];
        return NgxmTourService;
    }(ngxTourCore.TourService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TourAnchorOpenerComponent = /** @class */ (function () {
        function TourAnchorOpenerComponent() {
            this.menu = new material.MatMenu(undefined, undefined, { xPosition: 'after', yPosition: 'below', overlapTrigger: true, backdropClass: '' });
        }
        TourAnchorOpenerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'tourAnchorOpener',
                        template: "<span [matMenuTriggerFor]=\"menu\" #trigger=\"matMenuTrigger\"></span>",
                        styles: [":host { display: none; }"]
                    }] }
        ];
        TourAnchorOpenerComponent.propDecorators = {
            menu: [{ type: core.Input }],
            trigger: [{ type: core.ViewChild, args: [material.MatMenuTrigger, { static: true },] }]
        };
        return TourAnchorOpenerComponent;
    }());
    if (false) {
        /** @type {?} */
        TourAnchorOpenerComponent.prototype.menu;
        /** @type {?} */
        TourAnchorOpenerComponent.prototype.trigger;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TourStepTemplateService = /** @class */ (function () {
        function TourStepTemplateService() {
        }
        TourStepTemplateService.decorators = [
            { type: core.Injectable }
        ];
        return TourStepTemplateService;
    }());
    if (false) {
        /** @type {?} */
        TourStepTemplateService.prototype.templateComponent;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TourBackdropService = /** @class */ (function () {
        function TourBackdropService(rendererFactory) {
            this.renderer = rendererFactory.createRenderer(null, null);
        }
        /**
         * @param {?} targetElement
         * @return {?}
         */
        TourBackdropService.prototype.show = /**
         * @param {?} targetElement
         * @return {?}
         */
        function (targetElement) {
            /** @type {?} */
            var boundingRect = targetElement.nativeElement.getBoundingClientRect();
            if (!this.backdropElement) {
                this.backdropElement = this.renderer.createElement('div');
                this.renderer.addClass(this.backdropElement, 'ngx-tour_backdrop');
                this.renderer.appendChild(document.body, this.backdropElement);
            }
            this.setStyles(boundingRect);
        };
        /**
         * @return {?}
         */
        TourBackdropService.prototype.close = /**
         * @return {?}
         */
        function () {
            if (this.backdropElement) {
                this.renderer.removeChild(document.body, this.backdropElement);
                this.backdropElement = null;
            }
        };
        /**
         * @private
         * @param {?} boundingRect
         * @return {?}
         */
        TourBackdropService.prototype.setStyles = /**
         * @private
         * @param {?} boundingRect
         * @return {?}
         */
        function (boundingRect) {
            var e_1, _a;
            /** @type {?} */
            var styles = {
                position: 'fixed',
                width: boundingRect.width + 'px',
                height: boundingRect.height + 'px',
                top: boundingRect.top + 'px',
                left: boundingRect.left + 'px',
                'box-shadow': '0 0 0 9999px rgba(0, 0, 0, 0.7)',
                'z-index': '100'
            };
            try {
                for (var _b = __values(Object.keys(styles)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var name_1 = _c.value;
                    this.renderer.setStyle(this.backdropElement, name_1, styles[name_1]);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        TourBackdropService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        TourBackdropService.ctorParameters = function () { return [
            { type: core.RendererFactory2 }
        ]; };
        return TourBackdropService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TourBackdropService.prototype.renderer;
        /**
         * @type {?}
         * @private
         */
        TourBackdropService.prototype.backdropElement;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TourAnchorMatMenuDirective = /** @class */ (function () {
        function TourAnchorMatMenuDirective(componentFactoryResolver, injector, viewContainer, element, tourService, tourStepTemplate, tourBackdrop) {
            this.componentFactoryResolver = componentFactoryResolver;
            this.injector = injector;
            this.viewContainer = viewContainer;
            this.element = element;
            this.tourService = tourService;
            this.tourStepTemplate = tourStepTemplate;
            this.tourBackdrop = tourBackdrop;
            this.opener = this.viewContainer.createComponent(this.componentFactoryResolver.resolveComponentFactory(TourAnchorOpenerComponent)).instance;
        }
        /**
         * @return {?}
         */
        TourAnchorMatMenuDirective.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.tourService.register(this.tourAnchor, this);
        };
        /**
         * @return {?}
         */
        TourAnchorMatMenuDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.tourService.unregister(this.tourAnchor);
        };
        /**
         * @param {?} step
         * @return {?}
         */
        TourAnchorMatMenuDirective.prototype.showTourStep = /**
         * @param {?} step
         * @return {?}
         */
        function (step) {
            var _this = this;
            this.isActive = true;
            this.tourStepTemplate.templateComponent.step = step;
            // Ignore step.placement
            if (!step.preventScrolling) {
                if (!withinviewport(this.element.nativeElement, { sides: 'bottom' })) {
                    ((/** @type {?} */ (this.element.nativeElement))).scrollIntoView(false);
                }
                else if (!withinviewport(this.element.nativeElement, { sides: 'left top right' })) {
                    ((/** @type {?} */ (this.element.nativeElement))).scrollIntoView(true);
                }
            }
            ((/** @type {?} */ (this.opener.trigger)))._element = this.element;
            this.opener.trigger.menu = this.tourStepTemplate.templateComponent.tourStep;
            this.opener.trigger.ngAfterContentInit();
            this.opener.trigger.openMenu();
            if (step.enableBackdrop) {
                this.tourBackdrop.show(this.element);
            }
            else {
                this.tourBackdrop.close();
            }
            step.prevBtnTitle = step.prevBtnTitle || 'Prev';
            step.nextBtnTitle = step.nextBtnTitle || 'Next';
            step.endBtnTitle = step.endBtnTitle || 'End';
            if (this.menuCloseSubscription) {
                this.menuCloseSubscription.unsubscribe();
            }
            this.menuCloseSubscription = this.opener.trigger.menuClosed
                .pipe(operators.first())
                .subscribe((/**
             * @return {?}
             */
            function () {
                if (_this.tourService.getStatus() !== ngxTourCore.TourState.OFF) {
                    _this.tourService.end();
                }
                _this.tourBackdrop.close();
            }));
        };
        /**
         * @return {?}
         */
        TourAnchorMatMenuDirective.prototype.hideTourStep = /**
         * @return {?}
         */
        function () {
            this.isActive = false;
            if (this.menuCloseSubscription) {
                this.menuCloseSubscription.unsubscribe();
            }
            this.opener.trigger.closeMenu();
            if (this.tourService.getStatus() === ngxTourCore.TourState.OFF) {
                this.tourBackdrop.close();
            }
        };
        TourAnchorMatMenuDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tourAnchor]'
                    },] }
        ];
        /** @nocollapse */
        TourAnchorMatMenuDirective.ctorParameters = function () { return [
            { type: core.ComponentFactoryResolver },
            { type: core.Injector },
            { type: core.ViewContainerRef },
            { type: core.ElementRef },
            { type: NgxmTourService },
            { type: TourStepTemplateService },
            { type: TourBackdropService }
        ]; };
        TourAnchorMatMenuDirective.propDecorators = {
            tourAnchor: [{ type: core.Input }],
            isActive: [{ type: core.HostBinding, args: ['class.touranchor--is-active',] }]
        };
        return TourAnchorMatMenuDirective;
    }());
    if (false) {
        /** @type {?} */
        TourAnchorMatMenuDirective.prototype.tourAnchor;
        /** @type {?} */
        TourAnchorMatMenuDirective.prototype.opener;
        /** @type {?} */
        TourAnchorMatMenuDirective.prototype.menuCloseSubscription;
        /** @type {?} */
        TourAnchorMatMenuDirective.prototype.isActive;
        /**
         * @type {?}
         * @private
         */
        TourAnchorMatMenuDirective.prototype.componentFactoryResolver;
        /**
         * @type {?}
         * @private
         */
        TourAnchorMatMenuDirective.prototype.injector;
        /**
         * @type {?}
         * @private
         */
        TourAnchorMatMenuDirective.prototype.viewContainer;
        /**
         * @type {?}
         * @private
         */
        TourAnchorMatMenuDirective.prototype.element;
        /**
         * @type {?}
         * @private
         */
        TourAnchorMatMenuDirective.prototype.tourService;
        /**
         * @type {?}
         * @private
         */
        TourAnchorMatMenuDirective.prototype.tourStepTemplate;
        /**
         * @type {?}
         * @private
         */
        TourAnchorMatMenuDirective.prototype.tourBackdrop;
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
        TourStepTemplateComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'tour-step-template',
                        template: "\n    <mat-menu [overlapTrigger]=\"false\" class=\"tour-step\">\n      <ng-container *ngTemplateOutlet=\"stepTemplate || defaultTemplate; context: { step: step }\"></ng-container>\n    </mat-menu>\n    <ng-template #defaultTemplate let-step=\"step\">\n      <mat-card (click)=\"$event.stopPropagation()\">\n        <mat-card-title>\n          {{step?.title}}\n        </mat-card-title>\n        <mat-card-content>\n          {{step?.content}}\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-icon-button [disabled]=\"!tourService.hasPrev(step)\" (click)=\"tourService.prev()\">\n            <mat-icon>chevron_left</mat-icon>\n          </button>\n          <button mat-icon-button [disabled]=\"!tourService.hasNext(step)\" (click)=\"tourService.next()\">\n            <mat-icon>chevron_right</mat-icon>\n          </button>\n          <button mat-button (click)=\"tourService.end()\">{{step?.endBtnTitle}}</button>\n        </mat-card-actions>\n      </mat-card>\n    </ng-template>\n  ",
                        styles: ["\n      ::ng-deep .tour-step .mat-menu-content { \n          padding: 0 !important; \n      }\n  "]
                    }] }
        ];
        /** @nocollapse */
        TourStepTemplateComponent.ctorParameters = function () { return [
            { type: TourStepTemplateService },
            { type: NgxmTourService }
        ]; };
        TourStepTemplateComponent.propDecorators = {
            tourStep: [{ type: core.ViewChild, args: [material.MatMenu, { static: true },] }],
            stepTemplate: [{ type: core.Input }, { type: core.ContentChild, args: [core.TemplateRef, { static: true },] }]
        };
        return TourStepTemplateComponent;
    }(ngxTourCore.TourHotkeyListenerComponent));
    if (false) {
        /** @type {?} */
        TourStepTemplateComponent.prototype.tourStep;
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
    var TourMatMenuModule = /** @class */ (function () {
        function TourMatMenuModule() {
        }
        /**
         * @return {?}
         */
        TourMatMenuModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: TourMatMenuModule,
                providers: __spread([
                    TourStepTemplateService,
                    TourBackdropService
                ], ngxTourCore.TourModule.forRoot().providers, [
                    NgxmTourService
                ]),
            };
        };
        TourMatMenuModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [TourAnchorMatMenuDirective, TourStepTemplateComponent, TourAnchorOpenerComponent],
                        entryComponents: [TourAnchorOpenerComponent],
                        exports: [TourAnchorMatMenuDirective, TourStepTemplateComponent, ngxTourCore.TourModule],
                        imports: [common.CommonModule, ngxTourCore.TourModule,
                            material.MatMenuModule, material.MatCardModule, material.MatButtonModule, material.MatIconModule,
                        ],
                    },] }
        ];
        return TourMatMenuModule;
    }());

    exports.TourAnchorMatMenuDirective = TourAnchorMatMenuDirective;
    exports.TourMatMenuModule = TourMatMenuModule;
    exports.TourService = NgxmTourService;
    exports.TourStepTemplateComponent = TourStepTemplateComponent;
    exports.ɵa = NgxmTourService;
    exports.ɵb = TourStepTemplateService;
    exports.ɵc = TourBackdropService;
    exports.ɵd = TourAnchorOpenerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-tour-md-menu.umd.js.map
