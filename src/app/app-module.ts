import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { LayoutModule } from './layout/layout-module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { GenericForm } from './shared/components/generic-form/generic-form';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    App,
    GenericForm,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    TableModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimationsAsync(),
    providePrimeNG({
            theme: {
                preset: Aura
            }
        }),
    provideHttpClient(withInterceptorsFromDi()), // ✅ nouvelle méthode propre
  ],
  bootstrap: [App]
})
export class AppModule { }
