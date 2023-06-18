import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/models/place';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  activities!:any[];
  activity:Activity=new Activity();
  nameActivity!: string;
  
constructor(private activityService:ActivityService){}

  ngOnInit():void {
    //this.findAllActivity();
    this.nameActivity ='';
    this.findByActivityName();

  }

  /*findAllActivity(){
    this.activityService.findAll().subscribe(data =>{this.activitys = data});
  }*/


  findByActivityName(){
    this.activityService.findByActivityName(this.nameActivity).subscribe(data =>{
      this.activities = data;
    })
  }
  onSubmit(){
    this.findByActivityName();
  }

  saveActivity(){
    this.activityService.save(this.activity).subscribe(
      () => {
        // MAJ la liste des activitys
        //this.findAllActivity();
        this.findByActivityName;
        // Vider le formulaire
        this.activity = new Activity();
      }
    )
  }
  
  deleteActivity(id:number){
    this.activityService.delete(id).subscribe(
      () => {
        //this.findAllActivity();
      }
    )
  }


}
