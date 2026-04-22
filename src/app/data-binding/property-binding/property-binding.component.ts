import {Component} from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent {
  //   Property Binding

  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  isDisabled: boolean = true;

  //Attribute Binding
  cols = 2;


  //Class Binding
  isActive: boolean = false;

  //Style Binding
  width: number = 200;
}
