import { AfterContentInit, TemplateRef } from '@angular/core';
import { IStepOption, TourHotkeyListenerComponent } from 'ngx-tour-core';
import { NgxbTourService } from './ngx-bootstrap-tour.service';
import { TourStepTemplateService } from './tour-step-template.service';
export declare class TourStepTemplateComponent extends TourHotkeyListenerComponent implements AfterContentInit {
    private tourStepTemplateService;
    tourService: NgxbTourService;
    defaultTourStepTemplate: TemplateRef<any>;
    stepTemplate: TemplateRef<{
        step: IStepOption;
    }>;
    constructor(tourStepTemplateService: TourStepTemplateService, tourService: NgxbTourService);
    ngAfterContentInit(): void;
}
