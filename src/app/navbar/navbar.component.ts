import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  imageUrl: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Subscribe to route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateNavbarImage(event.url);
      }
    });
  }

  // Function to update the image based on the current route
  updateNavbarImage(url: string): void {
    if (url.includes('/home') || url.includes('/')) {
      this.imageUrl = 'assets/rawan-images/cover1.png'; // Change to appropriate image for Home
    } else if (url.includes('/about')) {
      this.imageUrl = 'assets/rawan-images/cover2.png'; // Change to appropriateet image for About
    } else if (url.includes('/sell')) {
      this.imageUrl = 'assets/rawan-images/sell1.png'; // Change to appropriate image for Sell
    }
  }

}



