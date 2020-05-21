import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

events = [
  {
    id: 1,
    name: 'Angular Connect',
    date: '5/10/2020',
    time: '10:00 am',
    price: 799.99,
    imageUrl: '../../assets/images/angularconnect-shield.png',
    location: {
      address: '1244 HT',
      city: 'Hyderabad',
      country: 'India'
    },
    onlineUrl: `https://www.angularconnect.com/`
  },
  {
    id: 2,
    name: 'Angular Summit',
    date: '9/23/2020',
    time: '2:00 pm',
    price: 399.00,
    imageUrl: '../../assets/images/angularconnect-shield.png',
    location: {
      address: '8759 DS',
      city: 'Chennai',
      country: 'India'
    }
  },
  {
    id: 3,
    name: 'Angular Ng Conference',
    date: '7/16/2020',
    time: '8:00 am',
    price: 1299.99,
    imageUrl: '../../assets/images/angularconnect-shield.png',
    location: {
      address: '7698 KJ',
      city: 'Mumbai',
      country: 'India'
    }
  },
  {
    id: 4,
    name: 'Ng Connect',
    date: '7/9/2020',
    time: '8:30 am',
    price: 499.99,
    imageUrl: '../../assets/images/angularconnect-shield.png',
    onlineUrl: `https://www.ngconnect.com/`
  }
];

  constructor() { }

  ngOnInit(): void {
  }



}
