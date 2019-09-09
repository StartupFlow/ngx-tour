/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { TourHotkeyListenerComponent, TourModule, TourService } from 'ngx-tour-core';
import { TourAnchorConsoleDirective } from './tour-anchor.directive';
export { TourAnchorConsoleDirective, TourService };
var TourConsoleModule = /** @class */ (function () {
    function TourConsoleModule() {
    }
    /**
     * @return {?}
     */
    TourConsoleModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TourConsoleModule,
            providers: tslib_1.__spread(TourModule.forRoot().providers),
        };
    };
    TourConsoleModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TourAnchorConsoleDirective],
                    exports: [TourAnchorConsoleDirective, TourHotkeyListenerComponent],
                    imports: [TourModule, CommonModule, NgbPopoverModule.forRoot()],
                },] }
    ];
    return TourConsoleModule;
}());
export { TourConsoleModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdG91ci1jb25zb2xlLyIsInNvdXJjZXMiOlsibGliL2NvbnNvbGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXJFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxXQUFXLEVBQUUsQ0FBQztBQUVuRDtJQUFBO0lBY0EsQ0FBQzs7OztJQVJlLHlCQUFPOzs7SUFBckI7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTLG1CQUNKLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQ2xDO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQWJGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztvQkFDMUMsT0FBTyxFQUFFLENBQUMsMEJBQTBCLEVBQUUsMkJBQTJCLENBQUM7b0JBQ2xFLE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ2hFOztJQVVELHdCQUFDO0NBQUEsQUFkRCxJQWNDO1NBVFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JQb3BvdmVyTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgVG91ckhvdGtleUxpc3RlbmVyQ29tcG9uZW50LCBUb3VyTW9kdWxlLCBUb3VyU2VydmljZSB9IGZyb20gJ25neC10b3VyLWNvcmUnO1xuXG5pbXBvcnQgeyBUb3VyQW5jaG9yQ29uc29sZURpcmVjdGl2ZSB9IGZyb20gJy4vdG91ci1hbmNob3IuZGlyZWN0aXZlJztcblxuZXhwb3J0IHsgVG91ckFuY2hvckNvbnNvbGVEaXJlY3RpdmUsIFRvdXJTZXJ2aWNlIH07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1RvdXJBbmNob3JDb25zb2xlRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW1RvdXJBbmNob3JDb25zb2xlRGlyZWN0aXZlLCBUb3VySG90a2V5TGlzdGVuZXJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbVG91ck1vZHVsZSwgQ29tbW9uTW9kdWxlLCBOZ2JQb3BvdmVyTW9kdWxlLmZvclJvb3QoKV0sXG59KVxuZXhwb3J0IGNsYXNzIFRvdXJDb25zb2xlTW9kdWxlIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVG91ckNvbnNvbGVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgLi4uVG91ck1vZHVsZS5mb3JSb290KCkucHJvdmlkZXJzLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=