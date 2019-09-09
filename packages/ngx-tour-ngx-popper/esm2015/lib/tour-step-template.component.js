/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, Input, ViewChild, ViewEncapsulation, TemplateRef } from '@angular/core';
import { TourHotkeyListenerComponent } from 'ngx-tour-core';
import { PopperContent } from 'ngx-popper';
import { NgxpTourService } from './ngx-popper-tour.service';
import { TourStepTemplateService } from './tour-step-template.service';
export class TourStepTemplateComponent extends TourHotkeyListenerComponent {
    /**
     * @param {?} tourStepTemplateService
     * @param {?} tourService
     */
    constructor(tourStepTemplateService, tourService) {
        super(tourService);
        this.tourStepTemplateService = tourStepTemplateService;
        this.tourService = tourService;
        this.step = {};
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.tourStepTemplateService.templateComponent = this;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.tourStepTemplateService.template = this.popperContent;
    }
}
TourStepTemplateComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                selector: 'tour-step-template',
                template: `
    <popper-content class="popper-content">
      <ng-container *ngTemplateOutlet="stepTemplate || defaultTemplate; context: { step: step }"></ng-container>
    </popper-content>

    <ng-template #defaultTemplate let-step="step">
      <p class="ngxp-title">{{step?.title}}</p>
      <p class="ngxp-content">{{step?.content}}</p>
      <div class="tour-step-navigation">
        <button [hidden]="!tourService.hasPrev(step)" class="ngxp-btn btn-prev" (click)="tourService.prev()">« {{step?.prevBtnTitle}}</button>
        <button [hidden]="!tourService.hasNext(step)" class="ngxp-btn btn-next" (click)="tourService.next()">{{step?.nextBtnTitle}} »</button>
        <button class="ngxp-btn btn-end" (click)="tourService.end()">{{step?.endBtnTitle}}</button>
      </div>
    </ng-template>
  `
            }] }
];
/** @nocollapse */
TourStepTemplateComponent.ctorParameters = () => [
    { type: TourStepTemplateService },
    { type: NgxpTourService }
];
TourStepTemplateComponent.propDecorators = {
    popperContent: [{ type: ViewChild, args: [PopperContent, { static: true },] }],
    stepTemplate: [{ type: Input }, { type: ContentChild, args: [TemplateRef, { static: true },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1zdGVwLXRlbXBsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10b3VyLW5neC1wb3BwZXIvIiwic291cmNlcyI6WyJsaWIvdG91ci1zdGVwLXRlbXBsYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFtQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNJLE9BQU8sRUFBZSwyQkFBMkIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQW1CLGFBQWEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFxQnZFLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSwyQkFBMkI7Ozs7O0lBU3hFLFlBQW9CLHVCQUFnRCxFQUFTLFdBQTRCO1FBQ3ZHLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQURELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7UUFGbEcsU0FBSSxHQUFnQixFQUFFLENBQUM7SUFJOUIsQ0FBQzs7OztJQUVNLGVBQWU7UUFDcEIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztJQUN4RCxDQUFDOzs7O0lBRU0sa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM3RCxDQUFDOzs7WUF0Q0YsU0FBUyxTQUFDO2dCQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7O0dBY1Q7YUFDRjs7OztZQXBCUSx1QkFBdUI7WUFEdkIsZUFBZTs7OzRCQXVCckIsU0FBUyxTQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MkJBRXpDLEtBQUssWUFDTCxZQUFZLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7OztJQUgzQyxrREFBZ0Y7O0lBRWhGLGlEQUVzRDs7SUFFdEQseUNBQThCOzs7OztJQUVsQiw0REFBd0Q7O0lBQUUsZ0RBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIElucHV0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSVN0ZXBPcHRpb24sIFRvdXJIb3RrZXlMaXN0ZW5lckNvbXBvbmVudCB9IGZyb20gJ25neC10b3VyLWNvcmUnO1xuaW1wb3J0IHsgTmd4UG9wcGVyTW9kdWxlLCBQb3BwZXJDb250ZW50IH0gZnJvbSAnbmd4LXBvcHBlcic7XG5pbXBvcnQgeyBOZ3hwVG91clNlcnZpY2UgfSBmcm9tICcuL25neC1wb3BwZXItdG91ci5zZXJ2aWNlJztcbmltcG9ydCB7IFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi90b3VyLXN0ZXAtdGVtcGxhdGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ3RvdXItc3RlcC10ZW1wbGF0ZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHBvcHBlci1jb250ZW50IGNsYXNzPVwicG9wcGVyLWNvbnRlbnRcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJzdGVwVGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlOyBjb250ZXh0OiB7IHN0ZXA6IHN0ZXAgfVwiPjwvbmctY29udGFpbmVyPlxuICAgIDwvcG9wcGVyLWNvbnRlbnQ+XG5cbiAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRUZW1wbGF0ZSBsZXQtc3RlcD1cInN0ZXBcIj5cbiAgICAgIDxwIGNsYXNzPVwibmd4cC10aXRsZVwiPnt7c3RlcD8udGl0bGV9fTwvcD5cbiAgICAgIDxwIGNsYXNzPVwibmd4cC1jb250ZW50XCI+e3tzdGVwPy5jb250ZW50fX08L3A+XG4gICAgICA8ZGl2IGNsYXNzPVwidG91ci1zdGVwLW5hdmlnYXRpb25cIj5cbiAgICAgICAgPGJ1dHRvbiBbaGlkZGVuXT1cIiF0b3VyU2VydmljZS5oYXNQcmV2KHN0ZXApXCIgY2xhc3M9XCJuZ3hwLWJ0biBidG4tcHJldlwiIChjbGljayk9XCJ0b3VyU2VydmljZS5wcmV2KClcIj7CqyB7e3N0ZXA/LnByZXZCdG5UaXRsZX19PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gW2hpZGRlbl09XCIhdG91clNlcnZpY2UuaGFzTmV4dChzdGVwKVwiIGNsYXNzPVwibmd4cC1idG4gYnRuLW5leHRcIiAoY2xpY2spPVwidG91clNlcnZpY2UubmV4dCgpXCI+e3tzdGVwPy5uZXh0QnRuVGl0bGV9fSDCuzwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibmd4cC1idG4gYnRuLWVuZFwiIChjbGljayk9XCJ0b3VyU2VydmljZS5lbmQoKVwiPnt7c3RlcD8uZW5kQnRuVGl0bGV9fTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgVG91clN0ZXBUZW1wbGF0ZUNvbXBvbmVudCBleHRlbmRzIFRvdXJIb3RrZXlMaXN0ZW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQge1xuICBAVmlld0NoaWxkKFBvcHBlckNvbnRlbnQsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBwb3BwZXJDb250ZW50OiBQb3BwZXJDb250ZW50O1xuXG4gIEBJbnB1dCgpXG4gIEBDb250ZW50Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiB0cnVlIH0pXG4gIHB1YmxpYyBzdGVwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHtzdGVwOiBJU3RlcE9wdGlvbn0+O1xuXG4gIHB1YmxpYyBzdGVwOiBJU3RlcE9wdGlvbiA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdG91clN0ZXBUZW1wbGF0ZVNlcnZpY2U6IFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlLCBwdWJsaWMgdG91clNlcnZpY2U6IE5neHBUb3VyU2VydmljZSkge1xuICAgIHN1cGVyKHRvdXJTZXJ2aWNlKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy50b3VyU3RlcFRlbXBsYXRlU2VydmljZS50ZW1wbGF0ZUNvbXBvbmVudCA9IHRoaXM7XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudG91clN0ZXBUZW1wbGF0ZVNlcnZpY2UudGVtcGxhdGUgPSB0aGlzLnBvcHBlckNvbnRlbnQ7XG4gIH1cblxufVxuIl19