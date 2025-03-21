import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { DemoComponent } from './demo.component';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  bootstrap: [DemoComponent],
  declarations: [DemoComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    OverlayModule,
    RouterModule.forRoot([{
      loadChildren: () => import('./md-menu/mat-lazy-tour/app.module').then(m => m.AppModule),
      path: 'mat-lazy-tour',
    },{
      loadChildren: () => import('./md-menu/md-menu.module').then(m => m.MdMenuModule),
      path: '',
    }, {
      redirectTo: '',
      path: '**',
    }]),
  ],
})
export class DemoModule { }
