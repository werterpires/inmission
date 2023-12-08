import { Component } from '@angular/core';
import { MenuSuperiorComponent } from '../menu-superior/menu-superior.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [MenuSuperiorComponent, FooterComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {}
