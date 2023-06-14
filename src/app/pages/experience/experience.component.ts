import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Chart from 'chart.js';
import { Experience } from "src/app/models/experience";
import { ExperienceService } from "src/app/services/experience.service";

@Component({
  selector: "app-experience",
  templateUrl: "experience.component.html"
})
export class ExperienceComponent implements OnInit {
accountss!: any [];
users!:any[];
accounts!:any[]
user:Experience=new Experience();

date!:Date;

selectedFiles:FileList;
currentFileUpload:File;

constructor(private experienceService:ExperienceService,/*private accountService:AccountService,*/private router:Router){
}
ngOnInit(): void {
  this.findAllExperiences();

 /* this.findAllAccounts();*/
 this.date,'yyyy-MM-dd';
 this.findByUpdateExp();
}
findAllExperiences(){
  
  this.experienceService.findAll().subscribe(data => {this.accountss = data});
}

findByUpdateExp(){
  this.experienceService.findByUpdateExp(this.date).subscribe(data=>{
    this.users =data;
  })
}

onSubmit(){
  this.findByUpdateExp();
}
/*findAllAccounts(){
  this.accountService.findAll().subscribe(data => {this.accounts = data});
}*/
/*saveExperience(){
  this.experienceService.save(this.user).subscribe(
    () => {
      
      this.findAllExperiences();
      
      this.user = new Experience();
    }
  )
}*/

selectFile(event:any){
  this.selectedFiles=event.target.files;
}
save(){
  this.currentFileUpload=this.selectedFiles.item(0);
  this.experienceService.save(this.currentFileUpload,this.user).subscribe(()=>{
    this.findAllExperiences();
    this.user= new Experience();
    this.selectedFiles = undefined;
});
}

deleteExperience(id:number){
  this.experienceService.delete(id).subscribe(
    () => {
      this.findAllExperiences();
    }
  )
}
editExperience(experience:Experience){
  localStorage.removeItem("editUserId");
  localStorage.setItem("editUserId",experience.idExperience.toString());
  this.router.navigate(['/editUser',experience.idExperience]);
}
}
