import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  myPortfolio:any;

  constructor(private PortfolioData:PortfolioService) { }

  ngOnInit(): void {
    this.PortfolioData.obtainData().subscribe(data => {
      console.log(data);
      this.myPortfolio=data;
    });
  }

}
