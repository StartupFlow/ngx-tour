/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Host, HostBinding, Input } from '@angular/core';
import { PopoverDirective } from 'ngx-bootstrap';
import withinviewport from 'withinviewport';
import { NgxbTourService } from './ngx-bootstrap-tour.service';
import { TourStepTemplateService } from './tour-step-template.service';
export class TourAnchorNgxBootstrapPopoverDirective extends PopoverDirective {
}
TourAnchorNgxBootstrapPopoverDirective.decorators = [
    { type: Directive, args: [{ selector: '[tourAnchor]' },] }
];
export class TourAnchorNgxBootstrapDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci1hbmNob3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXRvdXItbmd4LWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi90b3VyLWFuY2hvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHakQsT0FBTyxjQUFjLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR3ZFLE1BQU0sT0FBTyxzQ0FBdUMsU0FBUSxnQkFBZ0I7OztZQUQzRSxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFOztBQU12QyxNQUFNLE9BQU8sK0JBQStCOzs7Ozs7O0lBTzFDLFlBQ1UsV0FBNEIsRUFDNUIsZ0JBQXlDLEVBQ3pDLE9BQW1CLEVBQ1gsZ0JBQXdEO1FBSGhFLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtRQUM1QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXlCO1FBQ3pDLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDWCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXdDO1FBRXhFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFTSxZQUFZLENBQUMsSUFBaUI7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO1FBQy9ELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDaEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsR0FBRyxlQUFlLENBQUM7UUFDdkQsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLElBQUksSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDbkU7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDO1FBQzFELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxNQUFNLENBQUM7UUFDaEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLE1BQU0sQ0FBQztRQUNoRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDO1FBQzdDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQzFCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRTtnQkFDcEUsQ0FBQyxtQkFBYSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBQSxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2pFO2lCQUFNLElBQ0wsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxFQUN4RTtnQkFDQSxDQUFDLG1CQUFhLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFBLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEU7U0FDRjtJQUNILENBQUM7Ozs7SUFFTSxZQUFZO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7WUF4REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2FBQ3pCOzs7O1lBUlEsZUFBZTtZQUNmLHVCQUF1QjtZQVBaLFVBQVU7WUEwQlEsc0NBQXNDLHVCQUF2RSxJQUFJOzs7eUJBVE4sS0FBSzt1QkFFTCxXQUFXLFNBQUMsNkJBQTZCOzs7O0lBRjFDLHFEQUFtQzs7SUFFbkMsbURBQ3lCOzs7OztJQUd2QixzREFBb0M7Ozs7O0lBQ3BDLDJEQUFpRDs7Ozs7SUFDakQsa0RBQTJCOzs7OztJQUMzQiwyREFBd0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3QsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBvcG92ZXJEaXJlY3RpdmUgfSBmcm9tICduZ3gtYm9vdHN0cmFwJztcbmltcG9ydCB7IFRvdXJBbmNob3JEaXJlY3RpdmUgfSBmcm9tICduZ3gtdG91ci1jb3JlJztcbmltcG9ydCB7IElOZ3hiU3RlcE9wdGlvbiBhcyBJU3RlcE9wdGlvbiB9IGZyb20gJy4vc3RlcC1vcHRpb24uaW50ZXJmYWNlJztcbmltcG9ydCB3aXRoaW52aWV3cG9ydCBmcm9tICd3aXRoaW52aWV3cG9ydCc7XG5cbmltcG9ydCB7IE5neGJUb3VyU2VydmljZSB9IGZyb20gJy4vbmd4LWJvb3RzdHJhcC10b3VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVG91clN0ZXBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuL3RvdXItc3RlcC10ZW1wbGF0ZS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW3RvdXJBbmNob3JdJyB9KVxuZXhwb3J0IGNsYXNzIFRvdXJBbmNob3JOZ3hCb290c3RyYXBQb3BvdmVyRGlyZWN0aXZlIGV4dGVuZHMgUG9wb3ZlckRpcmVjdGl2ZSB7IH1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3RvdXJBbmNob3JdJ1xufSlcbmV4cG9ydCBjbGFzcyBUb3VyQW5jaG9yTmd4Qm9vdHN0cmFwRGlyZWN0aXZlXG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIFRvdXJBbmNob3JEaXJlY3RpdmUge1xuICBASW5wdXQoKSBwdWJsaWMgdG91ckFuY2hvcjogc3RyaW5nO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MudG91cmFuY2hvci0taXMtYWN0aXZlJylcbiAgcHVibGljIGlzQWN0aXZlOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdG91clNlcnZpY2U6IE5neGJUb3VyU2VydmljZSxcbiAgICBwcml2YXRlIHRvdXJTdGVwVGVtcGxhdGU6IFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBASG9zdCgpIHByaXZhdGUgcG9wb3ZlckRpcmVjdGl2ZTogVG91ckFuY2hvck5neEJvb3RzdHJhcFBvcG92ZXJEaXJlY3RpdmVcbiAgKSB7XG4gICAgdGhpcy5wb3BvdmVyRGlyZWN0aXZlLnRyaWdnZXJzID0gJyc7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50b3VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnRvdXJBbmNob3IsIHRoaXMpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudG91clNlcnZpY2UudW5yZWdpc3Rlcih0aGlzLnRvdXJBbmNob3IpO1xuICB9XG5cbiAgcHVibGljIHNob3dUb3VyU3RlcChzdGVwOiBJU3RlcE9wdGlvbik6IHZvaWQge1xuICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMucG9wb3ZlckRpcmVjdGl2ZS5wb3BvdmVyID0gdGhpcy50b3VyU3RlcFRlbXBsYXRlLnRlbXBsYXRlO1xuICAgIHRoaXMucG9wb3ZlckRpcmVjdGl2ZS5wb3BvdmVyQ29udGV4dCA9IHsgc3RlcCB9O1xuICAgIHRoaXMucG9wb3ZlckRpcmVjdGl2ZS5wb3BvdmVyVGl0bGUgPSBzdGVwLnRpdGxlO1xuICAgIHRoaXMucG9wb3ZlckRpcmVjdGl2ZS5jb250YWluZXIgPSAnYm9keSc7XG4gICAgdGhpcy5wb3BvdmVyRGlyZWN0aXZlLmNvbnRhaW5lckNsYXNzID0gJ25neC1ib290c3RyYXAnO1xuICAgIGlmIChzdGVwLmNvbnRhaW5lckNsYXNzKSB7XG4gICAgICB0aGlzLnBvcG92ZXJEaXJlY3RpdmUuY29udGFpbmVyQ2xhc3MgKz0gYCAke3N0ZXAuY29udGFpbmVyQ2xhc3N9YDtcbiAgICB9XG4gICAgdGhpcy5wb3BvdmVyRGlyZWN0aXZlLnBsYWNlbWVudCA9IHN0ZXAucGxhY2VtZW50IHx8ICd0b3AnO1xuICAgIHN0ZXAucHJldkJ0blRpdGxlID0gc3RlcC5wcmV2QnRuVGl0bGUgfHwgJ1ByZXYnO1xuICAgIHN0ZXAubmV4dEJ0blRpdGxlID0gc3RlcC5uZXh0QnRuVGl0bGUgfHwgJ05leHQnO1xuICAgIHN0ZXAuZW5kQnRuVGl0bGUgPSBzdGVwLmVuZEJ0blRpdGxlIHx8ICdFbmQnO1xuICAgIHRoaXMucG9wb3ZlckRpcmVjdGl2ZS5zaG93KCk7XG4gICAgaWYgKCFzdGVwLnByZXZlbnRTY3JvbGxpbmcpIHtcbiAgICAgIGlmICghd2l0aGludmlld3BvcnQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHsgc2lkZXM6ICdib3R0b20nIH0pKSB7XG4gICAgICAgICg8SFRNTEVsZW1lbnQ+dGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpLnNjcm9sbEludG9WaWV3KGZhbHNlKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICF3aXRoaW52aWV3cG9ydCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgeyBzaWRlczogJ2xlZnQgdG9wIHJpZ2h0JyB9KVxuICAgICAgKSB7XG4gICAgICAgICg8SFRNTEVsZW1lbnQ+dGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpLnNjcm9sbEludG9WaWV3KHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoaWRlVG91clN0ZXAoKTogdm9pZCB7XG4gICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMucG9wb3ZlckRpcmVjdGl2ZS5oaWRlKCk7XG4gIH1cbn1cbiJdfQ==