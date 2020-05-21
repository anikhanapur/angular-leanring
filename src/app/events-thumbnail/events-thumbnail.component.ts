import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-events-thumbnail',
  templateUrl: './events-thumbnail.component.html',
  styleUrls: ['./events-thumbnail.component.css']
})
export class EventsThumbnailComponent implements OnInit {
@Input() event: any;

name: string = `This is child thumbnail component`;
  constructor() { }

  ngOnInit(): void {
  }

  justDisplayData() {
    console.log(`This method is triggered from parent component and component name is ${ this.event.name }`);
    this.name = this.event.name;
  }

  handleClickMe() {
    console.log(`You've just clicked on the event: ${this.event.name}`);
  }

}
