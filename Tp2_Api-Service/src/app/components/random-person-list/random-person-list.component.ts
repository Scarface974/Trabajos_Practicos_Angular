import { Component, OnInit } from '@angular/core';
import { RandomPersonService } from '../../services/random-person.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-random-person-list',
  standalone: true, 
  templateUrl: './random-person-list.component.html',
  styleUrls: ['./random-person-list.component.css'],
  imports: [CommonModule], 
})
export class RandomPersonListComponent implements OnInit {
  persons: any[] = []; 

  constructor(private randomPersonService: RandomPersonService) {}

  async ngOnInit() {
    await this.fetchRandomPersons();
  }

  async fetchRandomPersons() {
    try {
      const data: any = await this.randomPersonService.getRandomPersons();
      this.persons.push(data); 
    } catch (error) {
      console.error('Error fetching random persons:', error);
    }
  }
}
