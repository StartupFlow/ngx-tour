/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TourHotkeyListenerComponent } from './tour-hotkey-listener.component';
import { TourService } from './tour.service';
export class TourModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: TourModule,
            providers: [
                TourService,
            ],
        };
    }
}
TourModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TourHotkeyListenerComponent],
                exports: [TourHotkeyListenerComponent],
                imports: [CommonModule, RouterModule],
            },] }
];
;
export { TourService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdG91ci1jb3JlLyIsInNvdXJjZXMiOlsibGliL3RvdXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU83QyxNQUFNLE9BQU8sVUFBVTs7OztJQUNaLE1BQU0sQ0FBQyxPQUFPO1FBQ2pCLE9BQU87WUFDSCxRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUU7Z0JBQ1AsV0FBVzthQUNkO1NBQ0osQ0FBQztJQUNOLENBQUM7OztZQWJKLFFBQVEsU0FBQztnQkFDTixZQUFZLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztnQkFDM0MsT0FBTyxFQUFFLENBQUMsMkJBQTJCLENBQUM7Z0JBQ3RDLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUM7YUFDeEM7O0FBVUEsQ0FBQztBQUVGLE9BQU8sRUFBRSxXQUFXLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVG91ckhvdGtleUxpc3RlbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b3VyLWhvdGtleS1saXN0ZW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG91clNlcnZpY2UgfSBmcm9tICcuL3RvdXIuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbVG91ckhvdGtleUxpc3RlbmVyQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbVG91ckhvdGtleUxpc3RlbmVyQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBUb3VyTW9kdWxlIHtcbiAgICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogVG91ck1vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIFRvdXJTZXJ2aWNlLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfTtcbiAgICB9XG59O1xuXG5leHBvcnQgeyBUb3VyU2VydmljZSB9O1xuIl19