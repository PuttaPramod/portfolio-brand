import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Achievement {
  title: string;
  description: string;
  icon: string;
  year: string;
  color: string;
  certificate: string;
}

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.html',
  styleUrl: './achievements.css'
})

export class Achievements {

  achievements: Achievement[] = [

    {
      title: 'Full Stack Internship',
      description: 'Successfully completed Full Stack Developer Virtual Internship.',
      icon: 'bi bi-award-fill',
      year: 'Feb 2026',
      color: '#8b5cf6',
      certificate: 'images/Internship Cert.png'
    },

    {
      title: 'Angular Couse',
      description: 'Successfully completed Angular Course on Infosys Springboard.',
      icon: 'bi bi-code-slash',
      year: '2026',
      color: '#06b6d4',
      certificate: 'images/Angular Cert.png'
    },

    {
      title: 'IoT',
      description: 'I Completed IoT Course on NPTEL.',
      icon: 'bi bi-broadcast-pin',
      year: '2026',
      color: '#10b981',
      certificate: 'images/IoT Cert.png'
    },

    {
      title: 'JavaScript',
      description: 'I Certified a JavaScript Intermediate on HackerRank.',
      icon: 'bi bi-terminal-fill',
      year: '2026',
      color: '#ef4444',
      certificate: 'images/JavaScript HR.png'
    },

    {
      title: 'Agentic Force Specialist',
      description: 'I Certified as an Agentic Force Specialist on Salesforce.',
      icon: 'bi bi-robot',
      year: '2026',
      color: '#f97316',
      certificate: 'images/AgentForce Specialist Certificate.png'
    },

    {
      title: 'Python',
      description: 'I Completed a Python Basics on HackerRank.',
      icon: 'bi bi-filetype-py',
      year: '2026',
      color: '#3b82f6',
      certificate: 'images/Python HR.png'
    }

  ];

  selectedCertificate = '';

  openCertificate(img: string) {
    this.selectedCertificate = img;
  }

  closeCertificate() {
    this.selectedCertificate = '';
  }

}