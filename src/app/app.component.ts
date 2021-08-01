import { Component } from '@angular/core';
import { arc } from 'd3-shape';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'standup-wheel';

  arcPath: string | null = '';

  NUM_PERSONS = 10;

  persons: { name: string, startAngle: number, endAngle: number, color: string, path?: string | null }[] = [];

  constructor() {
    this.fillPersons();
    this.generatePath();
  }

  fillPersons(): void {
    const increment = (Math.PI * 2) / this.NUM_PERSONS;
    let startAngle = 0;
    for (let i = 0; i < this.NUM_PERSONS; i++) {
      this.persons.push({
        name: `Person ${i}`,
        startAngle: startAngle,
        endAngle: (startAngle + increment),
        color: `#${Math.floor(Math.random() * 16777215).toString(16)}`
      });
      startAngle += increment;
    }
  }
  generatePath(): void {
    const arcFn = arc();
    this.persons.forEach(person => {
      person.path = arcFn({
        innerRadius: 10,
        outerRadius: 100,
        startAngle: person.startAngle,
        endAngle: person.endAngle,
      });
    });
  }

}
