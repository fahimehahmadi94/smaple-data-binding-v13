import {Component,} from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styles: [`
    .counter {
      margin-left: 10px;
      font-weight: bold;
    }`
  ]
})
export class EventBindingComponent {
  count = 0;

  increase(): void {
    this.count++;
  }

  reduce(): void {
    if (this.count > 0) {
      this.count--;
    }
  }

}
