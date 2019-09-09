/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPopperModule } from 'ngx-popper';
import { TourModule } from 'ngx-tour-core';
import { TourAnchorNgxPopperDirective, TourAnchorNgxPopperPopoverDirective } from './tour-anchor.directive';
import { TourStepTemplateComponent } from './tour-step-template.component';
import { TourStepTemplateService } from './tour-step-template.service';
import { NgxpTourService } from './ngx-popper-tour.service';
export { TourAnchorNgxPopperDirective, TourAnchorNgxPopperPopoverDirective, TourStepTemplateComponent, NgxpTourService };
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
            providers: tslib_1.__spread([
                TourStepTemplateService
            ], TourModule.forRoot().providers, [
                NgxpTourService,
            ]),
        };
    };
    TourNgxPopperModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TourAnchorNgxPopperDirective, TourAnchorNgxPopperPopoverDirective, TourStepTemplateComponent],
                    exports: [TourAnchorNgxPopperDirective, TourAnchorNgxPopperPopoverDirective, TourStepTemplateComponent],
                    imports: [CommonModule, NgxPopperModule.forRoot()],
                },] }
    ];
    return TourNgxPopperModule;
}());
export { TourNgxPopperModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBvcHBlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdG91ci1uZ3gtcG9wcGVyLyIsInNvdXJjZXMiOlsibGliL25neC1wb3BwZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFNUQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLG1DQUFtQyxFQUFFLHlCQUF5QixFQUFFLGVBQWUsRUFBRSxDQUFDO0FBRXpIO0lBQUE7SUFnQkEsQ0FBQzs7OztJQVZlLDJCQUFPOzs7SUFBckI7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixTQUFTO2dCQUNQLHVCQUF1QjtlQUNwQixVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUztnQkFDakMsZUFBZTtjQUNoQjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkFmRixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsNEJBQTRCLEVBQUUsbUNBQW1DLEVBQUUseUJBQXlCLENBQUM7b0JBQzVHLE9BQU8sRUFBRSxDQUFDLDRCQUE0QixFQUFFLG1DQUFtQyxFQUFFLHlCQUF5QixDQUFDO29CQUN2RyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUNuRDs7SUFZRCwwQkFBQztDQUFBLEFBaEJELElBZ0JDO1NBWFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hQb3BwZXJNb2R1bGUgfSBmcm9tICduZ3gtcG9wcGVyJztcbmltcG9ydCB7IFRvdXJNb2R1bGUgfSBmcm9tICduZ3gtdG91ci1jb3JlJztcblxuaW1wb3J0IHsgVG91ckFuY2hvck5neFBvcHBlckRpcmVjdGl2ZSwgVG91ckFuY2hvck5neFBvcHBlclBvcG92ZXJEaXJlY3RpdmUgfSBmcm9tICcuL3RvdXItYW5jaG9yLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUb3VyU3RlcFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi90b3VyLXN0ZXAtdGVtcGxhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi90b3VyLXN0ZXAtdGVtcGxhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBOZ3hwVG91clNlcnZpY2UgfSBmcm9tICcuL25neC1wb3BwZXItdG91ci5zZXJ2aWNlJztcblxuZXhwb3J0IHsgVG91ckFuY2hvck5neFBvcHBlckRpcmVjdGl2ZSwgVG91ckFuY2hvck5neFBvcHBlclBvcG92ZXJEaXJlY3RpdmUsIFRvdXJTdGVwVGVtcGxhdGVDb21wb25lbnQsIE5neHBUb3VyU2VydmljZSB9O1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUb3VyQW5jaG9yTmd4UG9wcGVyRGlyZWN0aXZlLCBUb3VyQW5jaG9yTmd4UG9wcGVyUG9wb3ZlckRpcmVjdGl2ZSwgVG91clN0ZXBUZW1wbGF0ZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtUb3VyQW5jaG9yTmd4UG9wcGVyRGlyZWN0aXZlLCBUb3VyQW5jaG9yTmd4UG9wcGVyUG9wb3ZlckRpcmVjdGl2ZSwgVG91clN0ZXBUZW1wbGF0ZUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE5neFBvcHBlck1vZHVsZS5mb3JSb290KCldLFxufSlcbmV4cG9ydCBjbGFzcyBUb3VyTmd4UG9wcGVyTW9kdWxlIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVG91ck5neFBvcHBlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBUb3VyU3RlcFRlbXBsYXRlU2VydmljZSxcbiAgICAgICAgLi4uVG91ck1vZHVsZS5mb3JSb290KCkucHJvdmlkZXJzLFxuICAgICAgICBOZ3hwVG91clNlcnZpY2UsXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==