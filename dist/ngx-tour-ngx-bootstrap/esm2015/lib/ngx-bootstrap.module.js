/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TourModule } from 'ngx-tour-core';
import { TourAnchorNgxBootstrapDirective, TourAnchorNgxBootstrapPopoverDirective } from './tour-anchor.directive';
import { TourStepTemplateComponent } from './tour-step-template.component';
import { TourStepTemplateService } from './tour-step-template.service';
import { NgxbTourService } from './ngx-bootstrap-tour.service';
export { TourAnchorNgxBootstrapDirective, TourAnchorNgxBootstrapPopoverDirective, TourStepTemplateComponent, NgxbTourService };
export class TourNgxBootstrapModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: TourNgxBootstrapModule,
            providers: [
                TourStepTemplateService,
                ...TourModule.forRoot().providers,
                NgxbTourService,
            ],
        };
    }
}
TourNgxBootstrapModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TourAnchorNgxBootstrapDirective, TourAnchorNgxBootstrapPopoverDirective, TourStepTemplateComponent],
                exports: [TourAnchorNgxBootstrapDirective, TourAnchorNgxBootstrapPopoverDirective, TourStepTemplateComponent],
                imports: [CommonModule, PopoverModule.forRoot()],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdG91ci1uZ3gtYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL25neC1ib290c3RyYXAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLCtCQUErQixFQUFFLHNDQUFzQyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbEgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRS9ELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxzQ0FBc0MsRUFBRSx5QkFBeUIsRUFBRSxlQUFlLEVBQUUsQ0FBQztBQU8vSCxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBQzFCLE1BQU0sQ0FBQyxPQUFPO1FBQ25CLE9BQU87WUFDTCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFNBQVMsRUFBRTtnQkFDVCx1QkFBdUI7Z0JBQ3ZCLEdBQUcsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVM7Z0JBQ2pDLGVBQWU7YUFDaEI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBZkYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLCtCQUErQixFQUFFLHNDQUFzQyxFQUFFLHlCQUF5QixDQUFDO2dCQUNsSCxPQUFPLEVBQUUsQ0FBQywrQkFBK0IsRUFBRSxzQ0FBc0MsRUFBRSx5QkFBeUIsQ0FBQztnQkFDN0csT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNqRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUG9wb3Zlck1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvcG9wb3Zlcic7XG5pbXBvcnQgeyBUb3VyTW9kdWxlIH0gZnJvbSAnbmd4LXRvdXItY29yZSc7XG5cbmltcG9ydCB7IFRvdXJBbmNob3JOZ3hCb290c3RyYXBEaXJlY3RpdmUsIFRvdXJBbmNob3JOZ3hCb290c3RyYXBQb3BvdmVyRGlyZWN0aXZlIH0gZnJvbSAnLi90b3VyLWFuY2hvci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVG91clN0ZXBUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vdG91ci1zdGVwLXRlbXBsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb3VyU3RlcFRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4vdG91ci1zdGVwLXRlbXBsYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmd4YlRvdXJTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtYm9vdHN0cmFwLXRvdXIuc2VydmljZSc7XG5cbmV4cG9ydCB7IFRvdXJBbmNob3JOZ3hCb290c3RyYXBEaXJlY3RpdmUsIFRvdXJBbmNob3JOZ3hCb290c3RyYXBQb3BvdmVyRGlyZWN0aXZlLCBUb3VyU3RlcFRlbXBsYXRlQ29tcG9uZW50LCBOZ3hiVG91clNlcnZpY2UgfTtcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbVG91ckFuY2hvck5neEJvb3RzdHJhcERpcmVjdGl2ZSwgVG91ckFuY2hvck5neEJvb3RzdHJhcFBvcG92ZXJEaXJlY3RpdmUsIFRvdXJTdGVwVGVtcGxhdGVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVG91ckFuY2hvck5neEJvb3RzdHJhcERpcmVjdGl2ZSwgVG91ckFuY2hvck5neEJvb3RzdHJhcFBvcG92ZXJEaXJlY3RpdmUsIFRvdXJTdGVwVGVtcGxhdGVDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBQb3BvdmVyTW9kdWxlLmZvclJvb3QoKV0sXG59KVxuZXhwb3J0IGNsYXNzIFRvdXJOZ3hCb290c3RyYXBNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUb3VyTmd4Qm9vdHN0cmFwTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFRvdXJTdGVwVGVtcGxhdGVTZXJ2aWNlLFxuICAgICAgICAuLi5Ub3VyTW9kdWxlLmZvclJvb3QoKS5wcm92aWRlcnMsXG4gICAgICAgIE5neGJUb3VyU2VydmljZSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19