import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  faGithub = faGithub;

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.setTitle('Resume | Heather Stump Art & Design');
  }

}
