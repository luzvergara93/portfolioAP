import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educationList:any;

  constructor(private PortfolioData:PortfolioService) { }

  ngOnInit(): void {
    this.PortfolioData.obtainData().subscribe(data => {
      this.educationList=data.education;
    })
  }

}
