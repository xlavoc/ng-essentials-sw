import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { Characters } from '../characters.model';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  characters: Characters[];

  constructor(private characterService: CharactersService) { }

  ngOnInit() {
    this.characters = this.characterService.get();
  }

}
