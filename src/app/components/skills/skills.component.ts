import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsList:any;

  constructor(private PortfolioData:PortfolioService) { }

  ngOnInit(): void {
    this.PortfolioData.obtainData().subscribe(data => {
      this.skillsList=data.skills;
    })
  
  }

}
