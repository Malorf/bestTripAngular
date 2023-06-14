import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { Observable } from "rxjs/internal/Observable";
import { TravelGuide } from "src/app/models/travelguide";
import { TravelGuideService } from "src/app/services/travelguide.service";

@Component({
  selector: "app-travelguide",
  templateUrl: "travelguide.component.html"
})
export class TravelGuideComponent implements OnInit {
  private BASE_URL = "http://localhost:9090/travelguide";

  constructor(private httpClient:HttpClient) { }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
 


}
