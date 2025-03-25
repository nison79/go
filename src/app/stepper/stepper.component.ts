import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TextGeneratorService } from '../text-generator.service';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  imports: [NgIf, NgFor,HttpClientModule],
})
export class StepperComponent {
  currentStep = 1;
  gender: string | null = null;
  relationship: string | null = null;
  selectedNumber: number | null = null;
  resultText: string = '';

  constructor(private textGeneratorService: TextGeneratorService) {}

  nextStep() {
    if (this.currentStep < 4) {
      // Increase the max to 4 steps
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  chooseGender(gender: string) {
    this.gender = gender;
    this.nextStep();
  }

  chooseRelationship(relationship: string) {
    this.relationship = relationship;
    this.nextStep();
  }

  chooseNumber(number: number) {
    this.selectedNumber = number;
    this.textGeneratorService
      .generateText(this.gender, this.relationship, this.selectedNumber)
      .subscribe((text) => {
        this.resultText = text;
      });
  }

  getNumbers(): number[] {
    return Array.from({ length: 8 }, (_, i) => i + 1);
  }
}
