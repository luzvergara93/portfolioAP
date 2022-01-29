import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experienceList:any;

  constructor(private PortfolioData:PortfolioService) { }

  ngOnInit(): void {
    this.PortfolioData.obtainData().subscribe(data => {
      this.experienceList=data.experience;
    })
  }

}
