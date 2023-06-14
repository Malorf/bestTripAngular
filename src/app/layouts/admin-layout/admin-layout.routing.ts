import { Routes } from "@angular/router";

import { ExperienceComponent } from "../../pages/experience/experience.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { UserComponent } from "../../pages/user/user.component";

import { ReviewComponent } from "../../pages/review/review.component";
import { TravelGuideComponent } from "../../pages/travelguide/travelguide.component";
import { NewsletterComponent } from "../../pages/newsletter/newsletter/newsletter.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { TransportsComponent } from "../../pages/transport/transport.component";
import { PlaceComponent } from "../../pages/place/place.component";
import { HomeComponent } from "../../pages/home/home.component";
import { LoginComponent } from "../../pages/login/login.component";



export const AdminLayoutRoutes: Routes = [

  { path: "experience", component: ExperienceComponent },
  { path: "home", component: HomeComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "user", component: UserComponent },
  { path: "transports", component: TransportsComponent },
  { path: "typography", component: TypographyComponent },

  { path: "travelguide", component: TravelGuideComponent },
  { path: "review", component: ReviewComponent },
  { path: "newsletter", component: NewsletterComponent },
  { path: "place", component: PlaceComponent },
  { path: "login", component: LoginComponent}

];
