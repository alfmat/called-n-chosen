import { Component, OnInit } from '@angular/core';
import { Profile } from '../Profile';
import { PROFILES } from '../profile-db';

@Component({
  selector: 'app-all-profiles',
  templateUrl: './all-profiles.component.html',
  styleUrls: ['./all-profiles.component.css']
})
export class AllProfilesComponent implements OnInit {

  profiles: Profile[] = PROFILES;
  constructor() { }

  ngOnInit(): void {
  }

}
