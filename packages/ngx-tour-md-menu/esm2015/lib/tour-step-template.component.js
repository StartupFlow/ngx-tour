/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, Input, TemplateRef, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material';
import { TourHotkeyListenerComponent } from 'ngx-tour-core';
import { TourStepTemplateService } from './tour-step-template.service';
import { NgxmTourService } from './ngx-md-menu-tour.service';
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
}
TourStepTemplateComponent.decorators = [
    { type: Component, args: [{
                selector: 'tour-step-template',
                template: `
    <mat-menu [overlapTrigger]="false" class="tour-step">
      <ng-container *ngTemplateOutlet="stepTemplate || defaultTemplate; context: { step: step }"></ng-container>
    </mat-menu>
    <ng-template #defaultTemplate let-step="step">
      <mat-card (click)="$event.stopPropagation()">
        <mat-card-title>
          {{step?.title}}
        </mat-card-title>
        <mat-card-content>
          {{step?.content}}
        </mat-card-content>
        <mat-card-actions>
          <button mat-icon-button [disabled]="!tourService.hasPrev(step)" (click)="tourService.prev()">
            <mat-icon>chevron_left</mat-icon>
          </button>
          <button mat-icon-button [disabled]="!tourService.hasNext(step)" (click)="tourService.next()">
            <mat-icon>chevron_right</mat-icon>
          </button>
          <button mat-button (click)="tourService.end()">{{step?.endBtnTitle}}</button>
        </mat-card-actions>
      </mat-card>
    </ng-template>
  `,
                styles: [`
      ::ng-deep .tour-step .mat-menu-content { 
          padding: 0 !important; 
      }
  `]
            }] }
];
/** @nocollapse */
TourStepTemplateComponent.ctorParameters = () => [
    { type: TourStepTemplateService },
    { type: NgxmTourService }
];
TourStepTemplateComponent.propDecorators = {
    tourStep: [{ type: ViewChild, args: [MatMenu, { static: true },] }],
    stepTemplate: [{ type: Input }, { type: ContentChild, args: [TemplateRef, { static: true },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1zdGVwLXRlbXBsYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10b3VyLW1kLW1lbnUvIiwic291cmNlcyI6WyJsaWIvdG91ci1zdGVwLXRlbXBsYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM1QyxPQUFPLEVBQWUsMkJBQTJCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBa0MzRCxNQUFNLE9BQU8seUJBQTBCLFNBQVEsMkJBQTJCOzs7OztJQVN4RSxZQUFvQix1QkFBZ0QsRUFBUyxXQUE0QjtRQUN2RyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFERCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1FBRmxHLFNBQUksR0FBZ0IsRUFBRSxDQUFDO0lBSTlCLENBQUM7Ozs7SUFFTSxlQUFlO1FBQ3BCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7SUFDeEQsQ0FBQzs7O1lBL0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQU05QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUJUO3lCQTVCUTs7OztHQUlSO2FBeUJGOzs7O1lBbENRLHVCQUF1QjtZQUN4QixlQUFlOzs7dUJBbUNwQixTQUFTLFNBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFFbkMsS0FBSyxZQUNMLFlBQVksU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzs7O0lBSDNDLDZDQUErRDs7SUFFL0QsaURBRXdEOztJQUV4RCx5Q0FBOEI7Ozs7O0lBRWxCLDREQUF3RDs7SUFBRSxnREFBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdE1lbnUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBJU3RlcE9wdGlvbiwgVG91ckhvdGtleUxpc3RlbmVyQ29tcG9uZW50IH0gZnJvbSAnbmd4LXRvdXItY29yZSc7XG5cbmltcG9ydCB7IFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi90b3VyLXN0ZXAtdGVtcGxhdGUuc2VydmljZSc7XG5pbXBvcnQge05neG1Ub3VyU2VydmljZX0gZnJvbSAnLi9uZ3gtbWQtbWVudS10b3VyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0b3VyLXN0ZXAtdGVtcGxhdGUnLFxuICBzdHlsZXM6IFtgXG4gICAgICA6Om5nLWRlZXAgLnRvdXItc3RlcCAubWF0LW1lbnUtY29udGVudCB7IFxuICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDsgXG4gICAgICB9XG4gIGBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxtYXQtbWVudSBbb3ZlcmxhcFRyaWdnZXJdPVwiZmFsc2VcIiBjbGFzcz1cInRvdXItc3RlcFwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInN0ZXBUZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGU7IGNvbnRleHQ6IHsgc3RlcDogc3RlcCB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgPC9tYXQtbWVudT5cbiAgICA8bmctdGVtcGxhdGUgI2RlZmF1bHRUZW1wbGF0ZSBsZXQtc3RlcD1cInN0ZXBcIj5cbiAgICAgIDxtYXQtY2FyZCAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+XG4gICAgICAgIDxtYXQtY2FyZC10aXRsZT5cbiAgICAgICAgICB7e3N0ZXA/LnRpdGxlfX1cbiAgICAgICAgPC9tYXQtY2FyZC10aXRsZT5cbiAgICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAgICAgICAge3tzdGVwPy5jb250ZW50fX1cbiAgICAgICAgPC9tYXQtY2FyZC1jb250ZW50PlxuICAgICAgICA8bWF0LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBbZGlzYWJsZWRdPVwiIXRvdXJTZXJ2aWNlLmhhc1ByZXYoc3RlcClcIiAoY2xpY2spPVwidG91clNlcnZpY2UucHJldigpXCI+XG4gICAgICAgICAgICA8bWF0LWljb24+Y2hldnJvbl9sZWZ0PC9tYXQtaWNvbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBbZGlzYWJsZWRdPVwiIXRvdXJTZXJ2aWNlLmhhc05leHQoc3RlcClcIiAoY2xpY2spPVwidG91clNlcnZpY2UubmV4dCgpXCI+XG4gICAgICAgICAgICA8bWF0LWljb24+Y2hldnJvbl9yaWdodDwvbWF0LWljb24+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJ0b3VyU2VydmljZS5lbmQoKVwiPnt7c3RlcD8uZW5kQnRuVGl0bGV9fTwvYnV0dG9uPlxuICAgICAgICA8L21hdC1jYXJkLWFjdGlvbnM+XG4gICAgICA8L21hdC1jYXJkPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFRvdXJTdGVwVGVtcGxhdGVDb21wb25lbnQgZXh0ZW5kcyBUb3VySG90a2V5TGlzdGVuZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZChNYXRNZW51LCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgdG91clN0ZXA6IE1hdE1lbnU7XG5cbiAgQElucHV0KClcbiAgQENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IHRydWUgfSlcbiAgcHVibGljIHN0ZXBUZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyBzdGVwOiBJU3RlcE9wdGlvbiB9PjtcblxuICBwdWJsaWMgc3RlcDogSVN0ZXBPcHRpb24gPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlOiBUb3VyU3RlcFRlbXBsYXRlU2VydmljZSwgcHVibGljIHRvdXJTZXJ2aWNlOiBOZ3htVG91clNlcnZpY2UpIHtcbiAgICBzdXBlcih0b3VyU2VydmljZSk7XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudG91clN0ZXBUZW1wbGF0ZVNlcnZpY2UudGVtcGxhdGVDb21wb25lbnQgPSB0aGlzO1xuICB9XG59XG4iXX0=