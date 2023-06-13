import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { ReviewComponent } from "../../pages/review/review.component";
import { UserComponent } from "../../pages/user/user.component";
import { RecommendationsComponent } from "../../pages/recommendations/recommendations.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { TravelGuideComponent } from "../../pages/travelguide/travelguide.component";


import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NewsletterComponent } from "src/app/pages/newsletter/newsletter/newsletter.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    RecommendationsComponent,
    ReviewComponent,
    TravelGuideComponent,
    TypographyComponent,
    MapComponent,
    NewsletterComponent,

  ]
})
export class AdminLayoutModule {}
