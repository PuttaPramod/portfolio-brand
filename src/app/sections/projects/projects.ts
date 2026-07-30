import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {

  id: number;

  title: string;

  image: string;

  description: string;

  technologies: string[];

  live: string;

  github: string;

}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})

export class Projects {

  activeProject = signal<number>(1);

  selectedImage = signal<string | null>(null);

  projects: Project[] = [

    {

      id: 1,

      title: 'KANBANBOARD TASKFLOW',

      image: 'images/kanbanboard.png',

      description:
        'A Kanban board application that helps users create, organize, and manage tasks efficiently using a drag-and-drop workflow system.',

      technologies: [
        'MongoDB',
        'Express',
        'Angular',
        'Node JS'
      ],

      live: 'https://pktaskflow.netlify.app/',

      github: 'https://github.com/PuttaPramod/KanbanBoard'

    },

    {

      id: 2,

      title: 'GUIDEX',

      image: 'images/Guidex.png',

      description:
        'Smart career guidance platform for 10th-grade students with interactive quizzes and personalized stream recommendations.',

      technologies: [
        'Angular',
        'TypeScript',
        'Bootstrap',
        'CSS'
      ],

      live: 'https://pkguidesu.netlify.app/',

      github: 'https://github.com/PuttaPramod/Guidex'

    },

    {

      id: 3,

      title: 'E-Shop',

      image: 'images/pkeshop.png',

      description:
        'A fully featured e-commerce platform with product catalog, shopping cart, user authentication, and responsive design for seamless online shopping.',

      technologies: [
        'Mongo DB',
        'TypeScript',
        'Node JS'
      ],

      live: 'https://ppkeshop.netlify.app/',

      github: 'https://github.com/PuttaPramod/eshop'

    },

    {

      id: 4,

      title: 'TASK MANAGER',

      image: 'images/todoapp.png',

      description:
        'Intuitive task management application with priority levels, due dates, and progress tracking for enhanced productivity.',

      technologies: [
        'Angular',
        'Bootstrap',
        'CSS3'
      ],

      live: 'https://dayplan.onrender.com/',

      github: 'https://github.com/PuttaPramod/DayPlan'

    }

  ];

  toggleProject(id: number) {

    if (this.activeProject() === id) {

      return;

    }

    this.activeProject.set(id);

  }

  openImage(image: string) {
    console.log("Image clicked:", image);
    this.selectedImage.set(image);

    document.body.style.overflow = 'hidden';

  }

  closeImage() {

    this.selectedImage.set(null);

    document.body.style.overflow = '';

  }

  @HostListener('document:keydown.escape')

  onEscape() {

    this.closeImage();

  }

}