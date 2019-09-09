/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { TourHotkeyListenerComponent } from 'ngx-tour-core';
import { TourStepTemplateService } from './tour-step-template.service';
import { Component, TemplateRef, ViewChild, ViewEncapsulation, Input, ContentChild } from '@angular/core';
import { NgbTourService } from './ng-bootstrap-tour.service';
var TourStepTemplateComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TourStepTemplateComponent, _super);
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
export { TourStepTemplateComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1zdGVwLXRlbXBsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10b3VyLW5nLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi90b3VyLXN0ZXAtdGVtcGxhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLDJCQUEyQixFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBb0IsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1SCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFN0Q7SUFjK0MscURBQTJCO0lBT3hFLG1DQUFvQix1QkFBZ0QsRUFBUyxXQUEyQjtRQUF4RyxZQUNFLGtCQUFNLFdBQVcsQ0FBQyxTQUNuQjtRQUZtQiw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQVMsaUJBQVcsR0FBWCxXQUFXLENBQWdCOztJQUV4RyxDQUFDOzs7O0lBRU0sc0RBQWtCOzs7SUFBekI7UUFDRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLHVCQUF1QixDQUFDO0lBQzVGLENBQUM7O2dCQTNCRixTQUFTLFNBQUM7b0JBQ1QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSxzbUJBU1Q7aUJBQ0Y7Ozs7Z0JBakJRLHVCQUF1QjtnQkFFdkIsY0FBYzs7OzBDQWlCcEIsU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsrQkFFekQsS0FBSyxZQUNMLFlBQVksU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQVU3QyxnQ0FBQztDQUFBLEFBNUJELENBYytDLDJCQUEyQixHQWN6RTtTQWRZLHlCQUF5Qjs7O0lBQ3BDLDREQUE2Rzs7SUFFN0csaURBRXdEOzs7OztJQUU1Qyw0REFBd0Q7O0lBQUUsZ0RBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVG91ckhvdGtleUxpc3RlbmVyQ29tcG9uZW50LCBJU3RlcE9wdGlvbiB9IGZyb20gJ25neC10b3VyLWNvcmUnO1xuaW1wb3J0IHsgVG91clN0ZXBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuL3RvdXItc3RlcC10ZW1wbGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvbmVudCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCwgQWZ0ZXJDb250ZW50SW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0LCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYlRvdXJTZXJ2aWNlIH0gZnJvbSAnLi9uZy1ib290c3RyYXAtdG91ci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAndG91ci1zdGVwLXRlbXBsYXRlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI3RvdXJTdGVwIGxldC1zdGVwPVwic3RlcFwiPlxuICAgICAgPHAgY2xhc3M9XCJ0b3VyLXN0ZXAtY29udGVudFwiPnt7c3RlcD8uY29udGVudH19PC9wPlxuICAgICAgPGRpdiBjbGFzcz1cInRvdXItc3RlcC1uYXZpZ2F0aW9uXCI+XG4gICAgICAgIDxidXR0b24gKm5nSWY9XCJ0b3VyU2VydmljZS5oYXNQcmV2KHN0ZXApXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cInRvdXJTZXJ2aWNlLnByZXYoKVwiPsKrIHt7c3RlcD8ucHJldkJ0blRpdGxlfX08L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInRvdXJTZXJ2aWNlLmhhc05leHQoc3RlcClcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWRlZmF1bHRcIiAoY2xpY2spPVwidG91clNlcnZpY2UubmV4dCgpXCI+e3tzdGVwPy5uZXh0QnRuVGl0bGV9fSDCuzwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZGVmYXVsdFwiIChjbGljayk9XCJ0b3VyU2VydmljZS5lbmQoKVwiPnt7c3RlcD8uZW5kQnRuVGl0bGV9fTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgVG91clN0ZXBUZW1wbGF0ZUNvbXBvbmVudCBleHRlbmRzIFRvdXJIb3RrZXlMaXN0ZW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBAVmlld0NoaWxkKCd0b3VyU3RlcCcsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgZGVmYXVsdFRvdXJTdGVwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgQENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IHRydWUgfSlcbiAgcHVibGljIHN0ZXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyBzdGVwOiBJU3RlcE9wdGlvbiB9PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlOiBUb3VyU3RlcFRlbXBsYXRlU2VydmljZSwgcHVibGljIHRvdXJTZXJ2aWNlOiBOZ2JUb3VyU2VydmljZSkge1xuICAgIHN1cGVyKHRvdXJTZXJ2aWNlKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50b3VyU3RlcFRlbXBsYXRlU2VydmljZS50ZW1wbGF0ZSA9IHRoaXMuc3RlcFRlbXBsYXRlIHx8IHRoaXMuZGVmYXVsdFRvdXJTdGVwVGVtcGxhdGU7XG4gIH1cbn1cbiJdfQ==