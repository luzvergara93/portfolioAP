import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectList:any;

  constructor(private PortfolioData:PortfolioService) { }

  ngOnInit(): void {
    this.PortfolioData.obtainData().subscribe(data => {
      this.projectList=data.projects;
    })
  }

}
