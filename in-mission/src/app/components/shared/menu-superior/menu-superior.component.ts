import { NgClass, NgIf, isPlatformBrowser } from '@angular/common';
import {
  Component,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu-superior',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgClass, NgIf],
  templateUrl: './menu-superior.component.html',
  styleUrl: './menu-superior.component.css',
})
export class MenuSuperiorComponent {
  janelaMenor768 = false;
  mostrarMenu = true;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenWidth();
    }
  }

  checkScreenWidth() {
    if (window.innerWidth <= 768) {
      this.janelaMenor768 = true;
      this.mostrarMenu = false;
    } else {
      this.janelaMenor768 = false;
      this.mostrarMenu = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }
}
