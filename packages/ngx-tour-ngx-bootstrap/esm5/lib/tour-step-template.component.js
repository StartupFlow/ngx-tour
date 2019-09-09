/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ContentChild, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { TourHotkeyListenerComponent } from 'ngx-tour-core';
import { NgxbTourService } from './ngx-bootstrap-tour.service';
import { TourStepTemplateService } from './tour-step-template.service';
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
        { type: NgxbTourService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1zdGVwLXRlbXBsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10b3VyLW5neC1ib290c3RyYXAvIiwic291cmNlcyI6WyJsaWIvdG91ci1zdGVwLXRlbXBsYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1SCxPQUFPLEVBQWUsMkJBQTJCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXZFO0lBYytDLHFEQUEyQjtJQU94RSxtQ0FBb0IsdUJBQWdELEVBQVMsV0FBNEI7UUFBekcsWUFDRSxrQkFBTSxXQUFXLENBQUMsU0FDbkI7UUFGbUIsNkJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUFTLGlCQUFXLEdBQVgsV0FBVyxDQUFpQjs7SUFFekcsQ0FBQzs7OztJQUVNLHNEQUFrQjs7O0lBQXpCO1FBQ0UsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztJQUM1RixDQUFDOztnQkEzQkYsU0FBUyxTQUFDO29CQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsc21CQVNUO2lCQUNGOzs7O2dCQWZRLHVCQUF1QjtnQkFEdkIsZUFBZTs7OzBDQWtCckIsU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsrQkFFekQsS0FBSyxZQUNMLFlBQVksU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQVU3QyxnQ0FBQztDQUFBLEFBNUJELENBYytDLDJCQUEyQixHQWN6RTtTQWRZLHlCQUF5Qjs7O0lBQ3BDLDREQUE2Rzs7SUFFN0csaURBRXdEOzs7OztJQUU1Qyw0REFBd0Q7O0lBQUUsZ0RBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSVN0ZXBPcHRpb24sIFRvdXJIb3RrZXlMaXN0ZW5lckNvbXBvbmVudCB9IGZyb20gJ25neC10b3VyLWNvcmUnO1xuXG5pbXBvcnQgeyBOZ3hiVG91clNlcnZpY2UgfSBmcm9tICcuL25neC1ib290c3RyYXAtdG91ci5zZXJ2aWNlJztcbmltcG9ydCB7IFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi90b3VyLXN0ZXAtdGVtcGxhdGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ3RvdXItc3RlcC10ZW1wbGF0ZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICN0b3VyU3RlcCBsZXQtc3RlcD1cInN0ZXBcIj5cbiAgICAgIDxwIGNsYXNzPVwidG91ci1zdGVwLWNvbnRlbnRcIj57e3N0ZXA/LmNvbnRlbnR9fTwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0b3VyLXN0ZXAtbmF2aWdhdGlvblwiPlxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwidG91clNlcnZpY2UuaGFzUHJldihzdGVwKVwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZGVmYXVsdFwiIChjbGljayk9XCJ0b3VyU2VydmljZS5wcmV2KClcIj7CqyB7e3N0ZXA/LnByZXZCdG5UaXRsZX19PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gKm5nSWY9XCJ0b3VyU2VydmljZS5oYXNOZXh0KHN0ZXApXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cInRvdXJTZXJ2aWNlLm5leHQoKVwiPnt7c3RlcD8ubmV4dEJ0blRpdGxlfX0gwrs8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWRlZmF1bHRcIiAoY2xpY2spPVwidG91clNlcnZpY2UuZW5kKClcIj57e3N0ZXA/LmVuZEJ0blRpdGxlfX08L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFRvdXJTdGVwVGVtcGxhdGVDb21wb25lbnQgZXh0ZW5kcyBUb3VySG90a2V5TGlzdGVuZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQFZpZXdDaGlsZCgndG91clN0ZXAnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmLCBzdGF0aWM6IHRydWUgfSkgcHVibGljIGRlZmF1bHRUb3VyU3RlcFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIEBDb250ZW50Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiB0cnVlIH0pXG4gIHB1YmxpYyBzdGVwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgc3RlcDogSVN0ZXBPcHRpb24gfT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0b3VyU3RlcFRlbXBsYXRlU2VydmljZTogVG91clN0ZXBUZW1wbGF0ZVNlcnZpY2UsIHB1YmxpYyB0b3VyU2VydmljZTogTmd4YlRvdXJTZXJ2aWNlKSB7XG4gICAgc3VwZXIodG91clNlcnZpY2UpO1xuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlLnRlbXBsYXRlID0gdGhpcy5zdGVwVGVtcGxhdGUgfHwgdGhpcy5kZWZhdWx0VG91clN0ZXBUZW1wbGF0ZTtcbiAgfVxufVxuIl19