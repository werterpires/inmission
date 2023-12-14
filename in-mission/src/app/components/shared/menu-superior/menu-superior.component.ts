import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu-superior',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './menu-superior.component.html',
  styleUrl: './menu-superior.component.css',
})
export class MenuSuperiorComponent {}
