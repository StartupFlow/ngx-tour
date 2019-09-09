/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPopperModule } from 'ngx-popper';
import { TourModule } from 'ngx-tour-core';
import { TourAnchorNgxPopperDirective, TourAnchorNgxPopperPopoverDirective } from './tour-anchor.directive';
import { TourStepTemplateComponent } from './tour-step-template.component';
import { TourStepTemplateService } from './tour-step-template.service';
import { NgxpTourService } from './ngx-popper-tour.service';
export { TourAnchorNgxPopperDirective, TourAnchorNgxPopperPopoverDirective, TourStepTemplateComponent, NgxpTourService };
export class TourNgxPopperModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: TourNgxPopperModule,
            providers: [
                TourStepTemplateService,
                ...TourModule.forRoot().providers,
                NgxpTourService,
            ],
        };
    }
}
TourNgxPopperModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TourAnchorNgxPopperDirective, TourAnchorNgxPopperPopoverDirective, TourStepTemplateComponent],
                exports: [TourAnchorNgxPopperDirective, TourAnchorNgxPopperPopoverDirective, TourStepTemplateComponent],
                imports: [CommonModule, NgxPopperModule.forRoot()],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBvcHBlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdG91ci1uZ3gtcG9wcGVyLyIsInNvdXJjZXMiOlsibGliL25neC1wb3BwZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzVHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsbUNBQW1DLEVBQUUseUJBQXlCLEVBQUUsZUFBZSxFQUFFLENBQUM7QUFPekgsTUFBTSxPQUFPLG1CQUFtQjs7OztJQUN2QixNQUFNLENBQUMsT0FBTztRQUNuQixPQUFPO1lBQ0wsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixTQUFTLEVBQUU7Z0JBQ1QsdUJBQXVCO2dCQUN2QixHQUFHLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTO2dCQUNqQyxlQUFlO2FBQ2hCO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQWZGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxtQ0FBbUMsRUFBRSx5QkFBeUIsQ0FBQztnQkFDNUcsT0FBTyxFQUFFLENBQUMsNEJBQTRCLEVBQUUsbUNBQW1DLEVBQUUseUJBQXlCLENBQUM7Z0JBQ3ZHLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neFBvcHBlck1vZHVsZSB9IGZyb20gJ25neC1wb3BwZXInO1xuaW1wb3J0IHsgVG91ck1vZHVsZSB9IGZyb20gJ25neC10b3VyLWNvcmUnO1xuXG5pbXBvcnQgeyBUb3VyQW5jaG9yTmd4UG9wcGVyRGlyZWN0aXZlLCBUb3VyQW5jaG9yTmd4UG9wcGVyUG9wb3ZlckRpcmVjdGl2ZSB9IGZyb20gJy4vdG91ci1hbmNob3IuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRvdXJTdGVwVGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuL3RvdXItc3RlcC10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG91clN0ZXBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuL3RvdXItc3RlcC10ZW1wbGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IE5neHBUb3VyU2VydmljZSB9IGZyb20gJy4vbmd4LXBvcHBlci10b3VyLnNlcnZpY2UnO1xuXG5leHBvcnQgeyBUb3VyQW5jaG9yTmd4UG9wcGVyRGlyZWN0aXZlLCBUb3VyQW5jaG9yTmd4UG9wcGVyUG9wb3ZlckRpcmVjdGl2ZSwgVG91clN0ZXBUZW1wbGF0ZUNvbXBvbmVudCwgTmd4cFRvdXJTZXJ2aWNlIH07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1RvdXJBbmNob3JOZ3hQb3BwZXJEaXJlY3RpdmUsIFRvdXJBbmNob3JOZ3hQb3BwZXJQb3BvdmVyRGlyZWN0aXZlLCBUb3VyU3RlcFRlbXBsYXRlQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1RvdXJBbmNob3JOZ3hQb3BwZXJEaXJlY3RpdmUsIFRvdXJBbmNob3JOZ3hQb3BwZXJQb3BvdmVyRGlyZWN0aXZlLCBUb3VyU3RlcFRlbXBsYXRlQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTmd4UG9wcGVyTW9kdWxlLmZvclJvb3QoKV0sXG59KVxuZXhwb3J0IGNsYXNzIFRvdXJOZ3hQb3BwZXJNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUb3VyTmd4UG9wcGVyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlLFxuICAgICAgICAuLi5Ub3VyTW9kdWxlLmZvclJvb3QoKS5wcm92aWRlcnMsXG4gICAgICAgIE5neHBUb3VyU2VydmljZSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19