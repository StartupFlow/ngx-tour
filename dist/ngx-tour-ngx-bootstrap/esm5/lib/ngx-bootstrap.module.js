/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TourModule } from 'ngx-tour-core';
import { TourAnchorNgxBootstrapDirective, TourAnchorNgxBootstrapPopoverDirective } from './tour-anchor.directive';
import { TourStepTemplateComponent } from './tour-step-template.component';
import { TourStepTemplateService } from './tour-step-template.service';
import { NgxbTourService } from './ngx-bootstrap-tour.service';
export { TourAnchorNgxBootstrapDirective, TourAnchorNgxBootstrapPopoverDirective, TourStepTemplateComponent, NgxbTourService };
var TourNgxBootstrapModule = /** @class */ (function () {
    function TourNgxBootstrapModule() {
    }
    /**
     * @return {?}
     */
    TourNgxBootstrapModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TourNgxBootstrapModule,
            providers: tslib_1.__spread([
                TourStepTemplateService
            ], TourModule.forRoot().providers, [
                NgxbTourService,
            ]),
        };
    };
    TourNgxBootstrapModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TourAnchorNgxBootstrapDirective, TourAnchorNgxBootstrapPopoverDirective, TourStepTemplateComponent],
                    exports: [TourAnchorNgxBootstrapDirective, TourAnchorNgxBootstrapPopoverDirective, TourStepTemplateComponent],
                    imports: [CommonModule, PopoverModule.forRoot()],
                },] }
    ];
    return TourNgxBootstrapModule;
}());
export { TourNgxBootstrapModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdG91ci1uZ3gtYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL25neC1ib290c3RyYXAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2xILE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsc0NBQXNDLEVBQUUseUJBQXlCLEVBQUUsZUFBZSxFQUFFLENBQUM7QUFFL0g7SUFBQTtJQWdCQSxDQUFDOzs7O0lBVmUsOEJBQU87OztJQUFyQjtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFNBQVM7Z0JBQ1AsdUJBQXVCO2VBQ3BCLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTO2dCQUNqQyxlQUFlO2NBQ2hCO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQWZGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQywrQkFBK0IsRUFBRSxzQ0FBc0MsRUFBRSx5QkFBeUIsQ0FBQztvQkFDbEgsT0FBTyxFQUFFLENBQUMsK0JBQStCLEVBQUUsc0NBQXNDLEVBQUUseUJBQXlCLENBQUM7b0JBQzdHLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ2pEOztJQVlELDZCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FYWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBvcG92ZXJNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3BvcG92ZXInO1xuaW1wb3J0IHsgVG91ck1vZHVsZSB9IGZyb20gJ25neC10b3VyLWNvcmUnO1xuXG5pbXBvcnQgeyBUb3VyQW5jaG9yTmd4Qm9vdHN0cmFwRGlyZWN0aXZlLCBUb3VyQW5jaG9yTmd4Qm9vdHN0cmFwUG9wb3ZlckRpcmVjdGl2ZSB9IGZyb20gJy4vdG91ci1hbmNob3IuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRvdXJTdGVwVGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuL3RvdXItc3RlcC10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG91clN0ZXBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuL3RvdXItc3RlcC10ZW1wbGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE5neGJUb3VyU2VydmljZSB9IGZyb20gJy4vbmd4LWJvb3RzdHJhcC10b3VyLnNlcnZpY2UnO1xuXG5leHBvcnQgeyBUb3VyQW5jaG9yTmd4Qm9vdHN0cmFwRGlyZWN0aXZlLCBUb3VyQW5jaG9yTmd4Qm9vdHN0cmFwUG9wb3ZlckRpcmVjdGl2ZSwgVG91clN0ZXBUZW1wbGF0ZUNvbXBvbmVudCwgTmd4YlRvdXJTZXJ2aWNlIH07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1RvdXJBbmNob3JOZ3hCb290c3RyYXBEaXJlY3RpdmUsIFRvdXJBbmNob3JOZ3hCb290c3RyYXBQb3BvdmVyRGlyZWN0aXZlLCBUb3VyU3RlcFRlbXBsYXRlQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1RvdXJBbmNob3JOZ3hCb290c3RyYXBEaXJlY3RpdmUsIFRvdXJBbmNob3JOZ3hCb290c3RyYXBQb3BvdmVyRGlyZWN0aXZlLCBUb3VyU3RlcFRlbXBsYXRlQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUG9wb3Zlck1vZHVsZS5mb3JSb290KCldLFxufSlcbmV4cG9ydCBjbGFzcyBUb3VyTmd4Qm9vdHN0cmFwTW9kdWxlIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVG91ck5neEJvb3RzdHJhcE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBUb3VyU3RlcFRlbXBsYXRlU2VydmljZSxcbiAgICAgICAgLi4uVG91ck1vZHVsZS5mb3JSb290KCkucHJvdmlkZXJzLFxuICAgICAgICBOZ3hiVG91clNlcnZpY2UsXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==