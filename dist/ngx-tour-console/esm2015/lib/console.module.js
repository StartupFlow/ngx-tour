/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { TourHotkeyListenerComponent, TourModule, TourService } from 'ngx-tour-core';
import { TourAnchorConsoleDirective } from './tour-anchor.directive';
export { TourAnchorConsoleDirective, TourService };
export class TourConsoleModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: TourConsoleModule,
            providers: [
                ...TourModule.forRoot().providers,
            ],
        };
    }
}
TourConsoleModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TourAnchorConsoleDirective],
                exports: [TourAnchorConsoleDirective, TourHotkeyListenerComponent],
                imports: [TourModule, CommonModule, NgbPopoverModule.forRoot()],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdG91ci1jb25zb2xlLyIsInNvdXJjZXMiOlsibGliL2NvbnNvbGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFckUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFdBQVcsRUFBRSxDQUFDO0FBT25ELE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFDckIsTUFBTSxDQUFDLE9BQU87UUFDbkIsT0FBTztZQUNMLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsU0FBUyxFQUFFO2dCQUNULEdBQUcsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVM7YUFDbEM7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBYkYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLDBCQUEwQixDQUFDO2dCQUMxQyxPQUFPLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSwyQkFBMkIsQ0FBQztnQkFDbEUsT0FBTyxFQUFFLENBQUMsVUFBVSxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNoRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiUG9wb3Zlck1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IFRvdXJIb3RrZXlMaXN0ZW5lckNvbXBvbmVudCwgVG91ck1vZHVsZSwgVG91clNlcnZpY2UgfSBmcm9tICduZ3gtdG91ci1jb3JlJztcblxuaW1wb3J0IHsgVG91ckFuY2hvckNvbnNvbGVEaXJlY3RpdmUgfSBmcm9tICcuL3RvdXItYW5jaG9yLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCB7IFRvdXJBbmNob3JDb25zb2xlRGlyZWN0aXZlLCBUb3VyU2VydmljZSB9O1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUb3VyQW5jaG9yQ29uc29sZURpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtUb3VyQW5jaG9yQ29uc29sZURpcmVjdGl2ZSwgVG91ckhvdGtleUxpc3RlbmVyQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1RvdXJNb2R1bGUsIENvbW1vbk1vZHVsZSwgTmdiUG9wb3Zlck1vZHVsZS5mb3JSb290KCldLFxufSlcbmV4cG9ydCBjbGFzcyBUb3VyQ29uc29sZU1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRvdXJDb25zb2xlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIC4uLlRvdXJNb2R1bGUuZm9yUm9vdCgpLnByb3ZpZGVycyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19