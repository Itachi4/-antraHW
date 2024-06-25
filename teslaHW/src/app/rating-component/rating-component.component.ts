import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating-component.component.html',
  styleUrl: './rating-component.component.css'
})
export class RatingComponentComponent {
  @Input() name!: string;
  @Input() content!: string;
  @Input() rate!: number;

  get stars(): Array<string> {
    return new Array(5).fill('★', 0, this.rate).fill('☆', this.rate);
  }

}
