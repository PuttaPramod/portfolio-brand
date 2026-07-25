import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  signal
} from '@angular/core';

import { About } from './sections/about/about';
import { Achievements } from './sections/achievements/achievements';
import { Contact } from './sections/contact/contact';
import { Experience } from './sections/experience/experience';
import { Footer } from './sections/footer/footer';
import { Header } from './sections/header/header';
import { Hero } from './sections/hero/hero';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Hero,
    About,
    Skills,
    Projects,
    Experience,
    Achievements,
    Contact,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {

  protected readonly title = signal('Pramod | Portfolio');

  showScrollTop = false;

  @HostListener('window:scroll')
  onWindowScroll() {

    const experience = document.getElementById('experience');

    if (!experience) return;

    this.showScrollTop =
      window.scrollY >= experience.offsetTop - 100;

  }

  scrollToTop() {

    window.scrollTo({

      top: 0,

      behavior: 'smooth'

    });

  }

}