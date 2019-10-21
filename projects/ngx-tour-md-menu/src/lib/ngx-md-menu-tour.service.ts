import { Injectable } from '@angular/core';
import { TourService } from 'ngx-tour-core';

import { INgxmStepOption } from './step-option.interface';

@Injectable({
  providedIn: 'root'
})
export class NgxmTourService extends TourService<INgxmStepOption> {}
