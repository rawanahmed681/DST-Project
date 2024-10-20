import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  imageUrl: string = 'assets/rawan-images/cover1.png';
  homepara: string= '';


  constructor(private router: Router) {
    console.log('Image URL:', this.imageUrl);
   }

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
     if (url.includes('/about') ) {
      this.imageUrl = 'assets/rawan-images/cover2.png';
     this.homepara = 'ABOUT US';
    } else if (url.includes('/sell')) {
      this.imageUrl = 'assets/rawan-images/sell1.png';
       this.homepara = 'SELL YOUR PROPERTY WITH US';
    }
    else if (url.includes('/home') || url.includes('/')) {
      this.imageUrl = 'assets/rawan-images/cover1.png';
      this.homepara = 'CHOOSING THE DESTINATION NOT THE PROPERT'
    }
    console.log('Image URL:', this.imageUrl);
  }

}



