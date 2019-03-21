import { Injectable } from '@angular/core';
import { Characters } from './characters.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  swCharacters: Characters[] = [
    {name: 'Luke Skywalker', side: ''},
    {name: 'Darth Vader', side: ''}
  ];

  constructor() { }

  get(): Characters[] {
    return this.swCharacters.slice();
  }

}
