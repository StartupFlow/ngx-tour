(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-tour-core'), require('@angular/common'), require('ngx-popper'), require('withinviewport')) :
    typeof define === 'function' && define.amd ? define('ngx-tour-ngx-popper', ['exports', '@angular/core', 'ngx-tour-core', '@angular/common', 'ngx-popper', 'withinviewport'], factory) :
    (global = global || self, factory(global['ngx-tour-ngx-popper'] = {}, global.ng.core, global.ngxTourCore, global.ng.common, global.ngxPopper, global.withinviewport));
}(this, function (exports, core, ngxTourCore, common, ngxPopper, withinviewport) { 'use strict';

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
    var NgxpTourService = /** @class */ (function (_super) {
        __extends(NgxpTourService, _super);
        function NgxpTourService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NgxpTourService.decorators = [
            { type: core.Injectable }
        ];
        return NgxpTourService;
    }(ngxTourCore.TourService));

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
            { type: core.Directive, args: [{ selector: '[tourAnchor]' },] }
        ];
        return TourAnchorNgxPopperPopoverDirective;
    }(ngxPopper.PopperController));
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
            this.popoverDirective.placement = step.placement || ngxPopper.Placements.Auto;
            this.popoverDirective.showTrigger = ngxPopper.Triggers.NONE;
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
                this.popoverDirective.showTrigger = step.popperSettings.showTrigger || ngxPopper.Triggers.NONE;
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
            { type: core.Directive, args: [{
                        selector: '[tourAnchor]',
                    },] }
        ];
        /** @nocollapse */
        TourAnchorNgxPopperDirective.ctorParameters = function () { return [
            { type: NgxpTourService },
            { type: TourStepTemplateService },
            { type: core.ElementRef },
            { type: TourAnchorNgxPopperPopoverDirective, decorators: [{ type: core.Host }] }
        ]; };
        TourAnchorNgxPopperDirective.propDecorators = {
            tourAnchor: [{ type: core.Input }],
            isActive: [{ type: core.HostBinding, args: ['class.touranchor--is-active',] }]
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
            { type: core.Component, args: [{
                        encapsulation: core.ViewEncapsulation.None,
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
            popperContent: [{ type: core.ViewChild, args: [ngxPopper.PopperContent, { static: true },] }],
            stepTemplate: [{ type: core.Input }, { type: core.ContentChild, args: [core.TemplateRef, { static: true },] }]
        };
        return TourStepTemplateComponent;
    }(ngxTourCore.TourHotkeyListenerComponent));
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
                ], ngxTourCore.TourModule.forRoot().providers, [
                    NgxpTourService,
                ]),
            };
        };
        TourNgxPopperModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [TourAnchorNgxPopperDirective, TourAnchorNgxPopperPopoverDirective, TourStepTemplateComponent],
                        exports: [TourAnchorNgxPopperDirective, TourAnchorNgxPopperPopoverDirective, TourStepTemplateComponent],
                        imports: [common.CommonModule, ngxPopper.NgxPopperModule.forRoot()],
                    },] }
        ];
        return TourNgxPopperModule;
    }());

    exports.TourAnchorNgxPopperDirective = TourAnchorNgxPopperDirective;
    exports.TourNgxPopperModule = TourNgxPopperModule;
    exports.TourService = NgxpTourService;
    exports.TourStepTemplateComponent = TourStepTemplateComponent;
    exports.ɵa = NgxpTourService;
    exports.ɵb = TourAnchorNgxPopperPopoverDirective;
    exports.ɵc = TourStepTemplateService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-tour-ngx-popper.umd.js.map
