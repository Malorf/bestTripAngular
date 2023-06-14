import { Routes } from "@angular/router";

import { ExperienceComponent } from "../../pages/experience/experience.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { UserComponent } from "../../pages/user/user.component";
import { RecommendationsComponent } from "../../pages/recommendations/recommendations.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { HomeComponent } from "../../pages/home/home.component";
import { LoginComponent } from "src/app/pages/login/login.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [

  { path: "experience", component: ExperienceComponent },
  { path: "home", component: HomeComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "user", component: UserComponent },
  { path: "recommendations", component: RecommendationsComponent },
  { path: "typography", component: TypographyComponent },
  { path: "login", component: LoginComponent}
  // { path: "rtl", component: RtlComponent }
];
