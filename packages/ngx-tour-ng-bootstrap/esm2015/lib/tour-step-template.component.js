/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TourHotkeyListenerComponent } from 'ngx-tour-core';
import { TourStepTemplateService } from './tour-step-template.service';
import { Component, TemplateRef, ViewChild, ViewEncapsulation, Input, ContentChild } from '@angular/core';
import { NgbTourService } from './ng-bootstrap-tour.service';
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
    { type: NgbTourService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1zdGVwLXRlbXBsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10b3VyLW5nLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi90b3VyLXN0ZXAtdGVtcGxhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsMkJBQTJCLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFvQixpQkFBaUIsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQWdCN0QsTUFBTSxPQUFPLHlCQUEwQixTQUFRLDJCQUEyQjs7Ozs7SUFPeEUsWUFBb0IsdUJBQWdELEVBQVMsV0FBMkI7UUFDdEcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBREQsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtJQUV4RyxDQUFDOzs7O0lBRU0sa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsdUJBQXVCLENBQUM7SUFDNUYsQ0FBQzs7O1lBM0JGLFNBQVMsU0FBQztnQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOzs7Ozs7Ozs7R0FTVDthQUNGOzs7O1lBakJRLHVCQUF1QjtZQUV2QixjQUFjOzs7c0NBaUJwQixTQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzJCQUV6RCxLQUFLLFlBQ0wsWUFBWSxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Ozs7SUFIM0MsNERBQTZHOztJQUU3RyxpREFFd0Q7Ozs7O0lBRTVDLDREQUF3RDs7SUFBRSxnREFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb3VySG90a2V5TGlzdGVuZXJDb21wb25lbnQsIElTdGVwT3B0aW9uIH0gZnJvbSAnbmd4LXRvdXItY29yZSc7XG5pbXBvcnQgeyBUb3VyU3RlcFRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4vdG91ci1zdGVwLXRlbXBsYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLCBBZnRlckNvbnRlbnRJbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQsIENvbnRlbnRDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiVG91clNlcnZpY2UgfSBmcm9tICcuL25nLWJvb3RzdHJhcC10b3VyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICd0b3VyLXN0ZXAtdGVtcGxhdGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjdG91clN0ZXAgbGV0LXN0ZXA9XCJzdGVwXCI+XG4gICAgICA8cCBjbGFzcz1cInRvdXItc3RlcC1jb250ZW50XCI+e3tzdGVwPy5jb250ZW50fX08L3A+XG4gICAgICA8ZGl2IGNsYXNzPVwidG91ci1zdGVwLW5hdmlnYXRpb25cIj5cbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInRvdXJTZXJ2aWNlLmhhc1ByZXYoc3RlcClcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWRlZmF1bHRcIiAoY2xpY2spPVwidG91clNlcnZpY2UucHJldigpXCI+wqsge3tzdGVwPy5wcmV2QnRuVGl0bGV9fTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwidG91clNlcnZpY2UuaGFzTmV4dChzdGVwKVwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZGVmYXVsdFwiIChjbGljayk9XCJ0b3VyU2VydmljZS5uZXh0KClcIj57e3N0ZXA/Lm5leHRCdG5UaXRsZX19IMK7PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cInRvdXJTZXJ2aWNlLmVuZCgpXCI+e3tzdGVwPy5lbmRCdG5UaXRsZX19PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBUb3VyU3RlcFRlbXBsYXRlQ29tcG9uZW50IGV4dGVuZHMgVG91ckhvdGtleUxpc3RlbmVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ3RvdXJTdGVwJywgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBkZWZhdWx0VG91clN0ZXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBAQ29udGVudENoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBwdWJsaWMgc3RlcFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7IHN0ZXA6IElTdGVwT3B0aW9uIH0+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdG91clN0ZXBUZW1wbGF0ZVNlcnZpY2U6IFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlLCBwdWJsaWMgdG91clNlcnZpY2U6IE5nYlRvdXJTZXJ2aWNlKSB7XG4gICAgc3VwZXIodG91clNlcnZpY2UpO1xuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlLnRlbXBsYXRlID0gdGhpcy5zdGVwVGVtcGxhdGUgfHwgdGhpcy5kZWZhdWx0VG91clN0ZXBUZW1wbGF0ZTtcbiAgfVxufVxuIl19