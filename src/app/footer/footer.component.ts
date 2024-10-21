import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  contactData = {
    name: '',
    phoneNum: null,
    destination: ''
  };

  onSubmit() {
    localStorage.setItem('contactUsData', JSON.stringify(this.contactData));
    this.contactData.name= '';
    this.contactData.phoneNum = null;
    this.contactData.destination = '';
    alert('Contact information saved!');
  }

}
