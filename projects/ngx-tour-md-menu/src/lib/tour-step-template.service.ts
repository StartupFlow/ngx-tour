import { Injectable } from '@angular/core';

import { TourStepTemplateComponent } from './tour-step-template.component';

@Injectable({
  providedIn: 'root'
})
export class TourStepTemplateService {
  public templateComponent: TourStepTemplateComponent;
}
