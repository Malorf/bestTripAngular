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
  
  publicationDate!:Date;
  user!:any[]; 
  travelguide!:any[]; 
  news:Newsletter=new Newsletter();
  Readmore = false;
  longText = `You can explore the majestic Himalayan Mountains, experience the natural beauty of the Amazon, snorkel in the crystal clear waters of the Caribbean, or get lost in the bustling streets of Tokyo. No matter where you choose to go, we're here to help you plan every step of your trip.

  We're also here to help with any issues you may encounter during your trip. If you have any questions about your reservation, itinerary or accommodation, please don't hesitate to contact our customer support team. We are here to help you anytime.
  
  Finally, don't forget to check our help section located in the persistent menu if you need information about refunds, cancellations or reservation changes.
  
  We hope this newsletter has inspired you for your next trip and we look forward to helping you plan your next adventure.
  
  Cordially,
  The travel team.`;

  
  constructor(private newsletterService:NewsletterService,private router:Router,private travelguideService:TravelGuideService){
  }
  ngOnInit(): void {
    this.findAllNewsletter();
    
    this.findAllTravelGuide();
    
    this.publicationDate=null;
    this.findByPublicationDate();
    
  }

  onSubmit(){
this.findByPublicationDate();


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

  findByPublicationDate(){
this.newsletterService.findByPublicationDate(this.publicationDate).subscribe(data=>{
this.user =data; 


})

}

 }


