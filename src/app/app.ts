import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Personal } from './components/personal/personal';
import { Education } from './components/education/education';
import { Skills } from './components/skills/skills';
import { Tools } from './components/tools/tools';
import { Achievements } from './components/achievements/achievements';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Personal,Education,Skills,Tools,Achievements],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Resume_Project');
}
