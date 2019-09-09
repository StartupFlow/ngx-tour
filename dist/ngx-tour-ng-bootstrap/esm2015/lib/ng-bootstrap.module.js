/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { TourModule } from 'ngx-tour-core';
import { NgbTourService } from './ng-bootstrap-tour.service';
import { TourAnchorNgBootstrapDirective, TourAnchorNgBootstrapPopoverDirective } from './tour-anchor.directive';
import { TourStepTemplateComponent } from './tour-step-template.component';
import { TourStepTemplateService } from './tour-step-template.service';
export { TourAnchorNgBootstrapDirective, TourAnchorNgBootstrapPopoverDirective, TourStepTemplateComponent, NgbTourService };
export class TourNgBootstrapModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: TourNgBootstrapModule,
            providers: [
                TourStepTemplateService,
                ...TourModule.forRoot().providers,
                NgbTourService
            ],
        };
    }
}
TourNgBootstrapModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TourAnchorNgBootstrapDirective, TourAnchorNgBootstrapPopoverDirective, TourStepTemplateComponent],
                exports: [TourAnchorNgBootstrapDirective, TourAnchorNgBootstrapPopoverDirective, TourStepTemplateComponent],
                imports: [CommonModule, NgbPopoverModule.forRoot()],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYm9vdHN0cmFwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10b3VyLW5nLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi9uZy1ib290c3RyYXAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDhCQUE4QixFQUFFLHFDQUFxQyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFdkUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLHFDQUFxQyxFQUFFLHlCQUF5QixFQUFFLGNBQWMsRUFBRSxDQUFDO0FBTzVILE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFDekIsTUFBTSxDQUFDLE9BQU87UUFDbkIsT0FBTztZQUNMLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsU0FBUyxFQUFFO2dCQUNULHVCQUF1QjtnQkFDdkIsR0FBRyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUztnQkFDakMsY0FBYzthQUNmO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQWZGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSxxQ0FBcUMsRUFBRSx5QkFBeUIsQ0FBQztnQkFDaEgsT0FBTyxFQUFFLENBQUMsOEJBQThCLEVBQUUscUNBQXFDLEVBQUUseUJBQXlCLENBQUM7Z0JBQzNHLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiUG9wb3Zlck1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IFRvdXJNb2R1bGUgfSBmcm9tICduZ3gtdG91ci1jb3JlJztcblxuaW1wb3J0IHsgTmdiVG91clNlcnZpY2UgfSBmcm9tICcuL25nLWJvb3RzdHJhcC10b3VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVG91ckFuY2hvck5nQm9vdHN0cmFwRGlyZWN0aXZlLCBUb3VyQW5jaG9yTmdCb290c3RyYXBQb3BvdmVyRGlyZWN0aXZlIH0gZnJvbSAnLi90b3VyLWFuY2hvci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVG91clN0ZXBUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vdG91ci1zdGVwLXRlbXBsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb3VyU3RlcFRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4vdG91ci1zdGVwLXRlbXBsYXRlLnNlcnZpY2UnO1xuXG5leHBvcnQgeyBUb3VyQW5jaG9yTmdCb290c3RyYXBEaXJlY3RpdmUsIFRvdXJBbmNob3JOZ0Jvb3RzdHJhcFBvcG92ZXJEaXJlY3RpdmUsIFRvdXJTdGVwVGVtcGxhdGVDb21wb25lbnQsIE5nYlRvdXJTZXJ2aWNlIH07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1RvdXJBbmNob3JOZ0Jvb3RzdHJhcERpcmVjdGl2ZSwgVG91ckFuY2hvck5nQm9vdHN0cmFwUG9wb3ZlckRpcmVjdGl2ZSwgVG91clN0ZXBUZW1wbGF0ZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtUb3VyQW5jaG9yTmdCb290c3RyYXBEaXJlY3RpdmUsIFRvdXJBbmNob3JOZ0Jvb3RzdHJhcFBvcG92ZXJEaXJlY3RpdmUsIFRvdXJTdGVwVGVtcGxhdGVDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOZ2JQb3BvdmVyTW9kdWxlLmZvclJvb3QoKV0sXG59KVxuZXhwb3J0IGNsYXNzIFRvdXJOZ0Jvb3RzdHJhcE1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRvdXJOZ0Jvb3RzdHJhcE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBUb3VyU3RlcFRlbXBsYXRlU2VydmljZSxcbiAgICAgICAgLi4uVG91ck1vZHVsZS5mb3JSb290KCkucHJvdmlkZXJzLFxuICAgICAgICBOZ2JUb3VyU2VydmljZVxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=