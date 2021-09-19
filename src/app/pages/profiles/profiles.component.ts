import { Component, OnInit } from '@angular/core';
import { Profile } from './Profile';
import { PROFILES } from './profile-db';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  profiles: Profile[] = PROFILES;
  constructor() { }

  ngOnInit(): void {
  }

}
