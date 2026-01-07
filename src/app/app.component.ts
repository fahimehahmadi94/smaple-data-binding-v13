import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Interpolation
  interpolation: string = 'interpolation';
  //TextContent Binding


  //   Property Binding
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  isDisabled: boolean = true;

  // Event Binding
  count = 0;

  increase(): void {
    this.count++;
  }

  //Two-way Binding
  name: string = 'Two-way Binding'


  //Attribute Binding
  cols = 2;


  //Class Binding
  isActive: boolean = true;

  //Style Binding
  width: number = 200;



}
