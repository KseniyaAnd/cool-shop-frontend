import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [],
  template: `
    <a href="/" class="flex items-center">
      <img [src]="logoSrc()" [alt]="logoAlt()" class="h-10 w-auto object-contain" />
    </a>
  `,
  styleUrl: './logo.scss',
})
export class Logo {
  logoSrc = input<string>('/images/logo.svg');
  logoAlt = input<string>('Logo');
}
