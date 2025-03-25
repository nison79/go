import { Component } from '@angular/core';
import { StepperComponent } from './stepper/stepper.component';



@Component({
  selector: 'app-root', // Correct import in imports array
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [StepperComponent],
  standalone: true
})
export class AppComponent {
  title = 'go';
}