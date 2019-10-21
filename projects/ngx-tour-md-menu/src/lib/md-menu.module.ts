import { TourAnchorOpenerComponent } from './tour-anchor-opener.component';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatMenuModule, MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';

import { TourModule } from 'ngx-tour-core';
import { TourAnchorMatMenuDirective } from './tour-anchor.directive';
import { TourStepTemplateComponent } from './tour-step-template.component';

export { TourAnchorMatMenuDirective, TourStepTemplateComponent, NgxmTourService };

@NgModule({
  declarations: [TourAnchorMatMenuDirective, TourStepTemplateComponent, TourAnchorOpenerComponent],
  entryComponents: [TourAnchorOpenerComponent],
  exports: [TourAnchorMatMenuDirective, TourStepTemplateComponent, TourModule],
  imports: [CommonModule, TourModule,
    MatMenuModule, MatCardModule, MatButtonModule, MatIconModule,
  ],
})
export class TourMatMenuModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: TourMatMenuModule,
      providers: [
        ...TourModule.forRoot().providers,
      ],
    };
  }
}
