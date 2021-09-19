import { Component, OnInit, Input } from '@angular/core';
import { PROFILES } from '../profile-db';
import { Profile } from '../Profile';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  profiles: Profile[] = PROFILES;
  user: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.user = data.id);
  }

}
