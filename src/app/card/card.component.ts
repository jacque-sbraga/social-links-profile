import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true }) imageProfile : string = "";
  @Input({ required: true }) name : string = "";
  @Input({ required: true }) description : string = "";
  @Input({ required: true }) bio : string = "";
  listLinks = [
    {name : 'GitHub', url: 'https://github.com'},
    {name : 'Frontend Mentor', url: 'https://www.frontendmentor.io/'},
    {name : 'Linkedin', url: 'https://linkedin.com'},
    {name : 'Twitter', url: 'https://twitter.com'},
    {name : 'Instagram', url: 'https://instagram.com'},
  ]
}
