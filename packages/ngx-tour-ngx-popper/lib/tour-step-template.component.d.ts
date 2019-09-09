import { AfterViewInit, AfterContentInit, TemplateRef } from '@angular/core';
import { IStepOption, TourHotkeyListenerComponent } from 'ngx-tour-core';
import { PopperContent } from 'ngx-popper';
import { NgxpTourService } from './ngx-popper-tour.service';
import { TourStepTemplateService } from './tour-step-template.service';
export declare class TourStepTemplateComponent extends TourHotkeyListenerComponent implements AfterViewInit, AfterContentInit {
    private tourStepTemplateService;
    tourService: NgxpTourService;
    popperContent: PopperContent;
    stepTemplate: TemplateRef<{
        step: IStepOption;
    }>;
    step: IStepOption;
    constructor(tourStepTemplateService: TourStepTemplateService, tourService: NgxpTourService);
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
}
