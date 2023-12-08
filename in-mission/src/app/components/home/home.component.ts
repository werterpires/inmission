import { Component } from '@angular/core';
import { MenuSuperiorComponent } from '../shared/menu-superior/menu-superior.component';
import { ContainerComponent } from '../shared/container/container.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
