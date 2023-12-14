import { Component } from '@angular/core';
import { ContainerComponent } from '../shared/container/container.component';
import { NgFor } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-palestras',
  standalone: true,
  imports: [ContainerComponent, NgFor],
  templateUrl: './palestras.component.html',
  styleUrl: './palestras.component.css',
})
export class PalestrasComponent {
  constructor(private sanitizer: DomSanitizer) {}

  videoUrls: SafeResourceUrl[] = this.tornarUrlSeguras([
    'https://www.youtube.com/embed/HjBs0LdCkpg?si=CZq_rzLpJ8YeTf5n',
    'https://www.youtube.com/embed/Z_-NJTqUWOs?si=NMVKY-iNwqnXGbeF',
    'https://www.youtube.com/embed/k3wvDEjJNjI?si=bk4jsGpKVUn7F3a8',
    'https://www.youtube.com/embed/fRD0nT9vFng?si=dui0yshgzFI9ZkFf',
    'https://www.youtube.com/embed/NHrEm3a7gKQ?si=Nwdb7VOtBG0f45xe',
    'https://www.youtube.com/embed/BBJSiqvosTo?si=av8CNT5uamPI5FzG',
  ]);

  tornarUrlSeguras(urls: string[]): SafeResourceUrl[] {
    const safeUrls = urls.map((url) =>
      this.sanitizer.bypassSecurityTrustResourceUrl(url)
    );
    return safeUrls;
  }
}
