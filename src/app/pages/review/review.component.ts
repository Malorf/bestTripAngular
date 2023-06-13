import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { Review } from "src/app/models/review";
import { ReviewService } from "src/app/services/reviewservice";

@Component({
  selector: "app-review",
  templateUrl: "review.component.html"
})
export class ReviewComponent implements OnInit {
 accountss!: any [];
 accounts!:any[]
 user:Review=new Review(); 
 constructor(private reviewService:ReviewService, private router:Router){

 }
 ngOnInit(): void {
   this.findAllReview();

 }
 findAllReview(){
   
   this.reviewService.findAll().subscribe(data => {this.accountss = data});

  
  }
  saveReview(){
    this.reviewService.save(this.user).subscribe(
      () => {
       
        this.findAllReview();
        this.user = new Review();
        
      }
    )
  }
  deleteReview(id: number){
    this.reviewService.delete(id).subscribe(
      () => {
        this.findAllReview();
      }
    )
  }
  editReview(review:Review){
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId",review.idReview.toString());
    this.router.navigate(['/editUser',review.idReview]);
 }
}
  function saveReview() {
    throw new Error("Function not implemented.");
  }

function deleteReview(idReview: any, number: any) {
  throw new Error("Function not implemented.");
}


