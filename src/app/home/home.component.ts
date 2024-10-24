import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

})
export class HomeComponent {

  searchPerformed: boolean =false;

  searchCriteria: any = {
    searchTerm: '',
    propertyType: '',
    priceRange: '',
    bedroomNum: null,
    minPrice: null,
    maxPrice: null
  };

  properties: any[] = [];
  filteredProperties: any[] = [];

  constructor() {

    this.properties = [
      { location: 'Cairo', compound: 'New Cairo Compound', developerName: 'ABC Developers', propertyType: 'Apartment', price: 100000, bedrooms: 3, bathrooms: 2 },
      { location: 'Giza', compound: 'Giza Compound', developerName: 'XYZ Developers', propertyType: 'Villa', price: 200000, bedrooms: 4, bathrooms: 4 },
      { location: 'Cairo', compound: 'Heliopolis Compound', developerName: 'LMN Developers', propertyType: 'Studio', price: 70000, bedrooms: 1, bathrooms: 1 },
      { location: 'Alexandria', compound: 'Alex Compound', developerName: 'ABC Developers', propertyType: 'Doplix', price: 150000, bedrooms: 2, bathrooms: 2 }
    ];

  }
  

  onSearch() {
    console.log("Search Criteria:", this.searchCriteria);
    localStorage.setItem('searchCriteria', JSON.stringify(this.searchCriteria));

    if (this.searchCriteria.priceRange) {
      const priceRangeArray = this.searchCriteria.priceRange.split('-');
      this.searchCriteria.minPrice = parseInt(priceRangeArray[0], 10);
      this.searchCriteria.maxPrice = parseInt(priceRangeArray[1], 10);
    } else {
      this.searchCriteria.minPrice = null;
      this.searchCriteria.maxPrice = null;
    }

    this.filteredProperties = this.properties.filter(property => {
      if(this.searchCriteria.searchTerm || this.searchCriteria.propertyType
        || this.searchCriteria.minPrice || this.searchCriteria.maxPrice
        || this.searchCriteria.bedroomNum
      ){
      return (
        (this.searchCriteria.searchTerm ?
          (property.location.toLowerCase().includes(this.searchCriteria.searchTerm.toLowerCase()) ||
           property.compound.toLowerCase().includes(this.searchCriteria.searchTerm.toLowerCase()) ||
           property.developerName.toLowerCase().includes(this.searchCriteria.searchTerm.toLowerCase())) : true) &&
        (this.searchCriteria.propertyType ? property.propertyType.toLowerCase() === this.searchCriteria.propertyType.toLowerCase() : true) &&
        (this.searchCriteria.minPrice ? property.price >= this.searchCriteria.minPrice : true) &&
        (this.searchCriteria.maxPrice ? property.price <= this.searchCriteria.maxPrice : true) &&
        (this.searchCriteria.bedroomNum ? property.bedrooms == this.searchCriteria.bedroomNum : true)
      );
  }}) ;

  this.searchPerformed= true;
    this.searchCriteria.searchTerm = '';
    this.searchCriteria.propertyType = '';
    this.searchCriteria.priceRange = '';
    this.searchCriteria.bedroomNum = null;

    console.log('Filtered Properties:', this.filteredProperties);


  }


  
   // Developers list
   developers = [
    {
      name: ' New Cairo  ',
      logo: '../../assets/images/salma-images/Apartment - Taj city.svg',
      description: 'Apartment - Taj city',
      title:"DM Downpayment/ 176,000 monthly /9 years",
      money:"9,400,00 EGP"
    },
    {
      name: ' New Cairo  ',
      logo: '../../assets/images/salma-images/Apartment - Taj city.svg',
      description: 'Apartment - Taj city',
      title:"DM Downpayment/ 176,000 monthly /9 years",
      money:"9,400,00 EGP"
    },
    {
      name: ' New Cairo  ',
      logo: '../../assets/images/salma-images/Apartment - Taj city.svg',
      description: 'Apartment - Taj city',
      title:"DM Downpayment/ 176,000 monthly /9 years",
      money:"9,400,00 EGP"
    },

  ];

  // New Launches list
  newLaunches = [
    {
      
      image: '../../assets/images/salma-images/plage.svg',
      
    },
    {
      
      image: '../../assets/images/salma-images/mar bay.png',
      
    },
    {
      
      image: '../../assets/images/salma-images/safia.svg',
    
    },
    {
      
      image: '../../assets/images/salma-images/summer.svg',
     
    }
  ];


}

