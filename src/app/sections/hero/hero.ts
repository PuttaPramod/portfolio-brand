import { Component, OnInit, OnDestroy,signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class Hero implements OnInit, OnDestroy {

  roles = [
    'Full Stack Developer',
    'Angular Developer',
    'MEAN Stack Developer',
    'Frontend Developer'
  ];

  currentRole = signal('');
  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timer: any;

  ngOnInit() {
    console.log('Hero Loaded');
  this.type();
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }

  type() {

  const role = this.roles[this.roleIndex];

  if (!this.deleting) {

    this.currentRole.set(role.substring(0, this.charIndex));
    this.charIndex++;

    if (this.charIndex > role.length) {

      this.deleting = true;

      this.timer = setTimeout(() => this.type(), 1500);

      return;
    }

  } else {

    this.currentRole.set(role.substring(0, this.charIndex));
    this.charIndex--;

    if (this.charIndex < 0) {

      this.deleting = false;

      this.roleIndex = (this.roleIndex + 1) % this.roles.length;

      this.charIndex = 0;
    }

  }

  this.timer = setTimeout(
    () => this.type(),
    this.deleting ? 50 : 100
  );

}
}