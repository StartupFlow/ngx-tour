/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { TourHotkeyListenerComponent } from 'ngx-tour-core';
import { NgxbTourService } from './ngx-bootstrap-tour.service';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1zdGVwLXRlbXBsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10b3VyLW5neC1ib290c3RyYXAvIiwic291cmNlcyI6WyJsaWIvdG91ci1zdGVwLXRlbXBsYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFvQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVILE9BQU8sRUFBZSwyQkFBMkIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFnQnZFLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSwyQkFBMkI7Ozs7O0lBT3hFLFlBQW9CLHVCQUFnRCxFQUFTLFdBQTRCO1FBQ3ZHLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQURELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7SUFFekcsQ0FBQzs7OztJQUVNLGtCQUFrQjtRQUN2QixJQUFJLENBQUMsdUJBQXVCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLHVCQUF1QixDQUFDO0lBQzVGLENBQUM7OztZQTNCRixTQUFTLFNBQUM7Z0JBQ1QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRTs7Ozs7Ozs7O0dBU1Q7YUFDRjs7OztZQWZRLHVCQUF1QjtZQUR2QixlQUFlOzs7c0NBa0JyQixTQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzJCQUV6RCxLQUFLLFlBQ0wsWUFBWSxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7SUFIM0MsNERBQTZHOztJQUU3RyxpREFFd0Q7Ozs7O0lBRTVDLDREQUF3RDs7SUFBRSxnREFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJU3RlcE9wdGlvbiwgVG91ckhvdGtleUxpc3RlbmVyQ29tcG9uZW50IH0gZnJvbSAnbmd4LXRvdXItY29yZSc7XG5cbmltcG9ydCB7IE5neGJUb3VyU2VydmljZSB9IGZyb20gJy4vbmd4LWJvb3RzdHJhcC10b3VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVG91clN0ZXBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuL3RvdXItc3RlcC10ZW1wbGF0ZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAndG91ci1zdGVwLXRlbXBsYXRlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI3RvdXJTdGVwIGxldC1zdGVwPVwic3RlcFwiPlxuICAgICAgPHAgY2xhc3M9XCJ0b3VyLXN0ZXAtY29udGVudFwiPnt7c3RlcD8uY29udGVudH19PC9wPlxuICAgICAgPGRpdiBjbGFzcz1cInRvdXItc3RlcC1uYXZpZ2F0aW9uXCI+XG4gICAgICAgIDxidXR0b24gKm5nSWY9XCJ0b3VyU2VydmljZS5oYXNQcmV2KHN0ZXApXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cInRvdXJTZXJ2aWNlLnByZXYoKVwiPsKrIHt7c3RlcD8ucHJldkJ0blRpdGxlfX08L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInRvdXJTZXJ2aWNlLmhhc05leHQoc3RlcClcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWRlZmF1bHRcIiAoY2xpY2spPVwidG91clNlcnZpY2UubmV4dCgpXCI+e3tzdGVwPy5uZXh0QnRuVGl0bGV9fSDCuzwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZGVmYXVsdFwiIChjbGljayk9XCJ0b3VyU2VydmljZS5lbmQoKVwiPnt7c3RlcD8uZW5kQnRuVGl0bGV9fTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgVG91clN0ZXBUZW1wbGF0ZUNvbXBvbmVudCBleHRlbmRzIFRvdXJIb3RrZXlMaXN0ZW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBAVmlld0NoaWxkKCd0b3VyU3RlcCcsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgZGVmYXVsdFRvdXJTdGVwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgQENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IHRydWUgfSlcbiAgcHVibGljIHN0ZXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyBzdGVwOiBJU3RlcE9wdGlvbiB9PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlOiBUb3VyU3RlcFRlbXBsYXRlU2VydmljZSwgcHVibGljIHRvdXJTZXJ2aWNlOiBOZ3hiVG91clNlcnZpY2UpIHtcbiAgICBzdXBlcih0b3VyU2VydmljZSk7XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudG91clN0ZXBUZW1wbGF0ZVNlcnZpY2UudGVtcGxhdGUgPSB0aGlzLnN0ZXBUZW1wbGF0ZSB8fCB0aGlzLmRlZmF1bHRUb3VyU3RlcFRlbXBsYXRlO1xuICB9XG59XG4iXX0=