import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { PopoverDirective } from 'ngx-bootstrap';
import { TourAnchorDirective } from 'ngx-tour-core';
import { INgxbStepOption as IStepOption } from './step-option.interface';
import { NgxbTourService } from './ngx-bootstrap-tour.service';
import { TourStepTemplateService } from './tour-step-template.service';
export declare class TourAnchorNgxBootstrapPopoverDirective extends PopoverDirective {
}
export declare class TourAnchorNgxBootstrapDirective implements OnInit, OnDestroy, TourAnchorDirective {
    private tourService;
    private tourStepTemplate;
    private element;
    private popoverDirective;
    tourAnchor: string;
    isActive: boolean;
    constructor(tourService: NgxbTourService, tourStepTemplate: TourStepTemplateService, element: ElementRef, popoverDirective: TourAnchorNgxBootstrapPopoverDirective);
    ngOnInit(): void;
    ngOnDestroy(): void;
    showTourStep(step: IStepOption): void;
    hideTourStep(): void;
}
