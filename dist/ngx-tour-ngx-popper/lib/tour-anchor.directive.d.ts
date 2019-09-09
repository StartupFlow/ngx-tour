import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { PopperController } from 'ngx-popper';
import { TourAnchorDirective } from 'ngx-tour-core';
import { NgxpTourService } from './ngx-popper-tour.service';
import { TourStepTemplateService } from './tour-step-template.service';
import { INgxpStepOption as IStepOption } from './step-option.interface';
export declare class TourAnchorNgxPopperPopoverDirective extends PopperController implements OnInit {
    ngOnInit(): void;
    initialize(): void;
}
export declare class TourAnchorNgxPopperDirective implements OnInit, OnDestroy, TourAnchorDirective {
    private tourService;
    private tourStepTemplate;
    private element;
    private popoverDirective;
    tourAnchor: string;
    isActive: boolean;
    constructor(tourService: NgxpTourService, tourStepTemplate: TourStepTemplateService, element: ElementRef, popoverDirective: TourAnchorNgxPopperPopoverDirective);
    ngOnInit(): void;
    ngOnDestroy(): void;
    showTourStep(step: IStepOption): void;
    hideTourStep(): void;
}
