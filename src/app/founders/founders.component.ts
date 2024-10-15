import { Component } from '@angular/core';

@Component({
  selector: 'app-founders',
  templateUrl: './founders.component.html',
  styleUrls: ['./founders.component.scss'],
})
export class FoundersComponent {
  founders = [
    {
      name: 'BASSEM YAHIA',
      image: 'assets/about-images/bassem.png',
      title: 'Co-Founder & Chief Executive Officer',
    },
    {
      name: 'MOHAMED YAHIA',
      image: 'assets/about-images/mohamed.png',
      title: 'Co-Founder & Chief Marketing Officer',
    },
    {
      name: 'AHMED NEANAA',
      image: 'assets/about-images/ahmed.png',
      title: 'Co-Founder & Chief Experience Officer',
    },
    {
      name: 'SALMA ASHRAF',
      image: 'assets/about-images/salma.png',
      title: 'Co-Founder & Chief Business Development Officer',
    },
  ];
}
