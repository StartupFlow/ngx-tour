/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { TourModule } from 'ngx-tour-core';
import { NgbTourService } from './ng-bootstrap-tour.service';
import { TourAnchorNgBootstrapDirective, TourAnchorNgBootstrapPopoverDirective } from './tour-anchor.directive';
import { TourStepTemplateComponent } from './tour-step-template.component';
import { TourStepTemplateService } from './tour-step-template.service';
export { TourAnchorNgBootstrapDirective, TourAnchorNgBootstrapPopoverDirective, TourStepTemplateComponent, NgbTourService };
var TourNgBootstrapModule = /** @class */ (function () {
    function TourNgBootstrapModule() {
    }
    /**
     * @return {?}
     */
    TourNgBootstrapModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TourNgBootstrapModule,
            providers: tslib_1.__spread([
                TourStepTemplateService
            ], TourModule.forRoot().providers, [
                NgbTourService
            ]),
        };
    };
    TourNgBootstrapModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TourAnchorNgBootstrapDirective, TourAnchorNgBootstrapPopoverDirective, TourStepTemplateComponent],
                    exports: [TourAnchorNgBootstrapDirective, TourAnchorNgBootstrapPopoverDirective, TourStepTemplateComponent],
                    imports: [CommonModule, NgbPopoverModule.forRoot()],
                },] }
    ];
    return TourNgBootstrapModule;
}());
export { TourNgBootstrapModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYm9vdHN0cmFwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10b3VyLW5nLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi9uZy1ib290c3RyYXAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hILE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXZFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxxQ0FBcUMsRUFBRSx5QkFBeUIsRUFBRSxjQUFjLEVBQUUsQ0FBQztBQUU1SDtJQUFBO0lBZ0JBLENBQUM7Ozs7SUFWZSw2QkFBTzs7O0lBQXJCO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsU0FBUztnQkFDUCx1QkFBdUI7ZUFDcEIsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVM7Z0JBQ2pDLGNBQWM7Y0FDZjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkFmRixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsOEJBQThCLEVBQUUscUNBQXFDLEVBQUUseUJBQXlCLENBQUM7b0JBQ2hILE9BQU8sRUFBRSxDQUFDLDhCQUE4QixFQUFFLHFDQUFxQyxFQUFFLHlCQUF5QixDQUFDO29CQUMzRyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ3BEOztJQVlELDRCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FYWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYlBvcG92ZXJNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBUb3VyTW9kdWxlIH0gZnJvbSAnbmd4LXRvdXItY29yZSc7XG5cbmltcG9ydCB7IE5nYlRvdXJTZXJ2aWNlIH0gZnJvbSAnLi9uZy1ib290c3RyYXAtdG91ci5zZXJ2aWNlJztcbmltcG9ydCB7IFRvdXJBbmNob3JOZ0Jvb3RzdHJhcERpcmVjdGl2ZSwgVG91ckFuY2hvck5nQm9vdHN0cmFwUG9wb3ZlckRpcmVjdGl2ZSB9IGZyb20gJy4vdG91ci1hbmNob3IuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRvdXJTdGVwVGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuL3RvdXItc3RlcC10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG91clN0ZXBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuL3RvdXItc3RlcC10ZW1wbGF0ZS5zZXJ2aWNlJztcblxuZXhwb3J0IHsgVG91ckFuY2hvck5nQm9vdHN0cmFwRGlyZWN0aXZlLCBUb3VyQW5jaG9yTmdCb290c3RyYXBQb3BvdmVyRGlyZWN0aXZlLCBUb3VyU3RlcFRlbXBsYXRlQ29tcG9uZW50LCBOZ2JUb3VyU2VydmljZSB9O1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUb3VyQW5jaG9yTmdCb290c3RyYXBEaXJlY3RpdmUsIFRvdXJBbmNob3JOZ0Jvb3RzdHJhcFBvcG92ZXJEaXJlY3RpdmUsIFRvdXJTdGVwVGVtcGxhdGVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVG91ckFuY2hvck5nQm9vdHN0cmFwRGlyZWN0aXZlLCBUb3VyQW5jaG9yTmdCb290c3RyYXBQb3BvdmVyRGlyZWN0aXZlLCBUb3VyU3RlcFRlbXBsYXRlQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTmdiUG9wb3Zlck1vZHVsZS5mb3JSb290KCldLFxufSlcbmV4cG9ydCBjbGFzcyBUb3VyTmdCb290c3RyYXBNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUb3VyTmdCb290c3RyYXBNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgVG91clN0ZXBUZW1wbGF0ZVNlcnZpY2UsXG4gICAgICAgIC4uLlRvdXJNb2R1bGUuZm9yUm9vdCgpLnByb3ZpZGVycyxcbiAgICAgICAgTmdiVG91clNlcnZpY2VcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19