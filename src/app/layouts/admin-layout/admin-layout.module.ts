import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { ExperienceComponent } from "../../pages/experience/experience.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { ReviewComponent } from "../../pages/review/review.component";
import { UserComponent } from "../../pages/user/user.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { TravelGuideComponent } from "../../pages/travelguide/travelguide.component";


import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NewsletterComponent } from "../../pages/newsletter/newsletter/newsletter.component";


import { TransportsComponent } from "../../pages/transport/transport.component";
import { PlaceComponent } from "../../pages/place/place.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    ExperienceComponent,
    UserComponent,
    ReviewComponent,
    TravelGuideComponent,
    TypographyComponent,
    MapComponent,
    NewsletterComponent,

    TransportsComponent,
    IconsComponent,
    TypographyComponent,
    MapComponent,
    PlaceComponent,
    
  ]
})
export class AdminLayoutModule {}
