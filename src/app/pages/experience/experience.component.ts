import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Chart from 'chart.js';
import { AppService } from "src/app/app.service";
import { Experience } from "src/app/models/experience";
import { ExperienceService } from "src/app/services/experience.service";

@Component({
  selector: "app-experience",
  templateUrl: "experience.component.html"
})
export class ExperienceComponent implements OnInit {
experiences!: any [];
users!:any[];
accounts!:any[]
experience:Experience=new Experience;

date!:Date;

selectedFiles:FileList;
currentFileUpload:File;

constructor(private experienceService:ExperienceService,/*private accountService:AccountService,*/private router:Router,private appService:AppService){
}
ngOnInit(): void {
  this.findAllExperiences();

 /* this.findAllAccounts();*/
 this.date;
 this.findByUpdateExp();
}
findAllExperiences(){
  
  this.experienceService.findAll().subscribe(data => {this.accounts = data});
}

findByUpdateExp(){
  this.experienceService.findByUpdateExp(this.date).subscribe(data=>{
    this.experiences =data;
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
saveExperience(){
  this.currentFileUpload=this.selectedFiles.item(0);
  this.experienceService.save(this.currentFileUpload,this.experience).subscribe(()=>{
    this.findAllExperiences();
    this.experience= new Experience();
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
  localStorage.removeItem("editExperienceId");
  localStorage.setItem("editExperienceId",experience.idExperience.toString());
  this.router.navigate(['/editExperience',experience.idExperience]);
}

authenticated(){
  return this.appService.authenticated; // authenticated = false
}
// Etape 7 : (security)
authorities(){
  if(this.appService.isAdmin == true){
    return false; // [hidden] = false isAdmin = true
  }else{
    return true; // [hidden] = true isAdmin = false
  }
}


}
