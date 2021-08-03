import { Component, HostListener } from '@angular/core';
import { arc } from 'd3-shape';
import { scaleOrdinal } from 'd3-scale';
import { schemeTableau10 } from 'd3-scale-chromatic';


import '@cds/core/tag/register.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'standup-wheel';

  arcPath: string | null = '';

  NUM_PERSONS = 10;

  rotateBy = 0;

  persons: { name: string, startAngle: number, endAngle: number, color: string, path?: string | null }[] = [];

  get transform() {
    return `rotate(${this.rotateBy})`;
  }

  constructor() {
    this.fillPersons();
    this.generatePath();
  }

  @HostListener('click')
  clicked() {

    this.rotateBy += this.NUM_PERSONS * 360 + Math.round(Math.random() * 360);
  }

  fillPersons(): void {
    const increment = (Math.PI * 2) / this.NUM_PERSONS;
    const colorScale = scaleOrdinal(schemeTableau10);
    let startAngle = 0;
    for (let i = 0; i < this.NUM_PERSONS; i++) {
      const name = `Person ${i}`;
      this.persons.push({
        name: name,
        startAngle: startAngle,
        endAngle: (startAngle + increment),
        color: colorScale(name)
      });
      startAngle += increment;
    }
  }
  generatePath(): void {
    const arcFn = arc();
    this.persons.forEach(person => {
      person.path = arcFn({
        innerRadius: 10,
        outerRadius: 80,
        startAngle: person.startAngle,
        endAngle: person.endAngle,
      });
    });
  }

}
