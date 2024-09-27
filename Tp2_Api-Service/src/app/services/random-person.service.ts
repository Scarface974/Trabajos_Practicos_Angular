import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomPersonService {
  async getRandomPersons() {
    const response = await fetch('https://random-person-generator.com/api');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  }
}


