import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { TravelGuide } from "src/app/models/travelguide";
import { TravelGuideService } from "src/app/services/travelguide.service";

@Component({
  selector: "app-travelguide",
  templateUrl: "travelguide.component.html"
})
export class TravelGuideComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
}
