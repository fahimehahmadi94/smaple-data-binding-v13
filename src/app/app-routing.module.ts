import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DataBindingComponent} from "./data-binding/data-binding.component";
import {InterpolationComponent} from "./data-binding/interpolation/interpolation.component";
import {PropertyBindingComponent} from "./data-binding/property-binding/property-binding.component";
import {EventBindingComponent} from "./data-binding/event-binding/event-binding.component";
import {TwoWayBindingComponent} from "./data-binding/two-way-binding/two-way-binding.component";

const routes: Routes = [
  {
    path: 'data-binding',
    component: DataBindingComponent,
    children: [
      {path: 'interpolation', component: InterpolationComponent},
      {path: 'property', component: PropertyBindingComponent},
      {path: 'event', component: EventBindingComponent},
      {path: 'two-way', component: TwoWayBindingComponent},
      {path: '', redirectTo: 'interpolation', pathMatch: 'full'}
    ]
  },
  { path: '**', redirectTo: 'data-binding' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
