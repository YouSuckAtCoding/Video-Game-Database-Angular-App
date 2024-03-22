import { Component, Input } from '@angular/core';
import { Game } from 'src/app/models';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrl: './game-tabs.component.scss'
})
export class GameTabsComponent {
  @Input() public game!: Game;
  
}
