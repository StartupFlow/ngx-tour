/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { TourAnchorOpenerComponent } from './tour-anchor-opener.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatMenuModule, MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';
import { TourModule } from 'ngx-tour-core';
import { TourAnchorMatMenuDirective } from './tour-anchor.directive';
import { TourStepTemplateComponent } from './tour-step-template.component';
import { TourStepTemplateService } from './tour-step-template.service';
import { TourBackdropService } from './tour-backdrop.service';
import { NgxmTourService } from './ngx-md-menu-tour.service';
export { TourAnchorMatMenuDirective, TourStepTemplateComponent, NgxmTourService };
var TourMatMenuModule = /** @class */ (function () {
    function TourMatMenuModule() {
    }
    /**
     * @return {?}
     */
    TourMatMenuModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TourMatMenuModule,
            providers: tslib_1.__spread([
                TourStepTemplateService,
                TourBackdropService
            ], TourModule.forRoot().providers, [
                NgxmTourService
            ]),
        };
    };
    TourMatMenuModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TourAnchorMatMenuDirective, TourStepTemplateComponent, TourAnchorOpenerComponent],
                    entryComponents: [TourAnchorOpenerComponent],
                    exports: [TourAnchorMatMenuDirective, TourStepTemplateComponent, TourModule],
                    imports: [CommonModule, TourModule,
                        MatMenuModule, MatCardModule, MatButtonModule, MatIconModule,
                    ],
                },] }
    ];
    return TourMatMenuModule;
}());
export { TourMatMenuModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWQtbWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdG91ci1tZC1tZW51LyIsInNvdXJjZXMiOlsibGliL21kLW1lbnUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVqRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUseUJBQXlCLEVBQUUsZUFBZSxFQUFFLENBQUM7QUFFbEY7SUFBQTtJQW9CQSxDQUFDOzs7O0lBWGUseUJBQU87OztJQUFyQjtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFNBQVM7Z0JBQ1AsdUJBQXVCO2dCQUN2QixtQkFBbUI7ZUFDaEIsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVM7Z0JBQy9CLGVBQWU7Y0FDbEI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBbkJGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSx5QkFBeUIsRUFBRSx5QkFBeUIsQ0FBQztvQkFDaEcsZUFBZSxFQUFFLENBQUMseUJBQXlCLENBQUM7b0JBQzVDLE9BQU8sRUFBRSxDQUFDLDBCQUEwQixFQUFFLHlCQUF5QixFQUFFLFVBQVUsQ0FBQztvQkFDNUUsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQVU7d0JBQ2hDLGFBQWEsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGFBQWE7cUJBQzdEO2lCQUNGOztJQWFELHdCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FaWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb3VyQW5jaG9yT3BlbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b3VyLWFuY2hvci1vcGVuZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0TWVudU1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXRDYXJkTW9kdWxlLCBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5pbXBvcnQgeyBUb3VyTW9kdWxlIH0gZnJvbSAnbmd4LXRvdXItY29yZSc7XG5pbXBvcnQgeyBUb3VyQW5jaG9yTWF0TWVudURpcmVjdGl2ZSB9IGZyb20gJy4vdG91ci1hbmNob3IuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRvdXJTdGVwVGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuL3RvdXItc3RlcC10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG91clN0ZXBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuL3RvdXItc3RlcC10ZW1wbGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7VG91ckJhY2tkcm9wU2VydmljZX0gZnJvbSAnLi90b3VyLWJhY2tkcm9wLnNlcnZpY2UnO1xuaW1wb3J0IHtOZ3htVG91clNlcnZpY2V9IGZyb20gJy4vbmd4LW1kLW1lbnUtdG91ci5zZXJ2aWNlJztcblxuZXhwb3J0IHsgVG91ckFuY2hvck1hdE1lbnVEaXJlY3RpdmUsIFRvdXJTdGVwVGVtcGxhdGVDb21wb25lbnQsIE5neG1Ub3VyU2VydmljZSB9O1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUb3VyQW5jaG9yTWF0TWVudURpcmVjdGl2ZSwgVG91clN0ZXBUZW1wbGF0ZUNvbXBvbmVudCwgVG91ckFuY2hvck9wZW5lckNvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1RvdXJBbmNob3JPcGVuZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVG91ckFuY2hvck1hdE1lbnVEaXJlY3RpdmUsIFRvdXJTdGVwVGVtcGxhdGVDb21wb25lbnQsIFRvdXJNb2R1bGVdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBUb3VyTW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsIE1hdENhcmRNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZSwgTWF0SWNvbk1vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVG91ck1hdE1lbnVNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUb3VyTWF0TWVudU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBUb3VyU3RlcFRlbXBsYXRlU2VydmljZSxcbiAgICAgICAgVG91ckJhY2tkcm9wU2VydmljZSxcbiAgICAgICAgLi4uVG91ck1vZHVsZS5mb3JSb290KCkucHJvdmlkZXJzLFxuICAgICAgICAgIE5neG1Ub3VyU2VydmljZVxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=