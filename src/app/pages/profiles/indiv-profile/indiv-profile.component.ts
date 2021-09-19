import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../Profile'

@Component({
  selector: 'app-indiv-profile',
  templateUrl: './indiv-profile.component.html',
  styleUrls: ['./indiv-profile.component.css']
})
export class IndivProfileComponent implements OnInit {
  @Input() profile!: Profile;
  constructor() { }

  ngOnInit(): void {
  }

}
