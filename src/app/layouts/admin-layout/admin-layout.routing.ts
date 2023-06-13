import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { UserComponent } from "../../pages/user/user.component";
import { ReviewComponent } from "../../pages/review/review.component";
import { TravelGuideComponent } from "../../pages/travelguide/travelguide.component";
import { RecommendationsComponent } from "../../pages/recommendations/recommendations.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { NewsletterComponent } from "src/app/pages/newsletter/newsletter/newsletter.component";


export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "user", component: UserComponent },
  { path: "recommendations", component: RecommendationsComponent },
  { path: "typography", component: TypographyComponent },
  { path: "travelguide", component: TravelGuideComponent },
  { path: "review", component: ReviewComponent },
  { path: "newsletter", component: NewsletterComponent }
  
];
