import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Newsletter } from 'src/app/models/newsletter';
import { NewsletterService } from 'src/app/services/newsletter.service';
import { TravelGuideService } from 'src/app/services/travelguide.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
   
  user!:any[]; 
  travelguide!:any[]; 
  news:Newsletter=new Newsletter();

  
  constructor(private newsletterService:NewsletterService,private router:Router,/*step4*/private travelguideService:TravelGuideService){
  }
  ngOnInit(): void {
    this.findAllNewsletter();
    
    this.findAllTravelGuide();
  }
  findAllNewsletter(){
    
    this.newsletterService.findAll().subscribe(data => {this.user = data});
  }
  
  findAllTravelGuide(){
    this.travelguideService.findAll().subscribe(data => {this.travelguide = data});
  }
  saveNewsletter(){
    this.newsletterService.save(this.news).subscribe(
      () => {
        
        this.news = new Newsletter();
      }
    )
  }

}