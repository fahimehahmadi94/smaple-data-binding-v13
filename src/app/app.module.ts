import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {DataBindingComponent} from './data-binding/data-binding.component';
import {InterpolationComponent} from './data-binding/interpolation/interpolation.component';
import {PropertyBindingComponent} from './data-binding/property-binding/property-binding.component';
import {EventBindingComponent} from './data-binding/event-binding/event-binding.component';
import {TwoWayBindingComponent} from './data-binding/two-way-binding/two-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
