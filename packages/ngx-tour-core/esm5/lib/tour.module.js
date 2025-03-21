/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TourHotkeyListenerComponent } from './tour-hotkey-listener.component';
import { TourService } from './tour.service';
var TourModule = /** @class */ (function () {
    function TourModule() {
    }
    /**
     * @return {?}
     */
    TourModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TourModule,
            providers: [
                TourService,
            ],
        };
    };
    TourModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TourHotkeyListenerComponent],
                    exports: [TourHotkeyListenerComponent],
                    imports: [CommonModule, RouterModule],
                },] }
    ];
    return TourModule;
}());
export { TourModule };
;
export { TourService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG91ci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdG91ci1jb3JlLyIsInNvdXJjZXMiOlsibGliL3RvdXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QztJQUFBO0lBY0EsQ0FBQzs7OztJQVJpQixrQkFBTzs7O0lBQXJCO1FBQ0ksT0FBTztZQUNILFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRTtnQkFDUCxXQUFXO2FBQ2Q7U0FDSixDQUFDO0lBQ04sQ0FBQzs7Z0JBYkosUUFBUSxTQUFDO29CQUNOLFlBQVksRUFBRSxDQUFDLDJCQUEyQixDQUFDO29CQUMzQyxPQUFPLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztvQkFDdEMsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQztpQkFDeEM7O0lBVUQsaUJBQUM7Q0FBQSxBQWRELElBY0M7U0FUWSxVQUFVO0FBU3RCLENBQUM7QUFFRixPQUFPLEVBQUUsV0FBVyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFRvdXJIb3RrZXlMaXN0ZW5lckNvbXBvbmVudCB9IGZyb20gJy4vdG91ci1ob3RrZXktbGlzdGVuZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRvdXJTZXJ2aWNlIH0gZnJvbSAnLi90b3VyLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1RvdXJIb3RrZXlMaXN0ZW5lckNvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW1RvdXJIb3RrZXlMaXN0ZW5lckNvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgVG91ck1vZHVsZSB7XG4gICAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IFRvdXJNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgICAgICBUb3VyU2VydmljZSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH07XG4gICAgfVxufTtcblxuZXhwb3J0IHsgVG91clNlcnZpY2UgfTtcbiJdfQ==