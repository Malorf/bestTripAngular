import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { UserComponent } from "../../pages/user/user.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { TransportsComponent } from "src/app/pages/transport/transport.component";
import { PlaceComponent } from "../../pages/place/place.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "user", component: UserComponent },
  { path: "transports", component: TransportsComponent },
  { path: "typography", component: TypographyComponent },
  { path: "place", component: PlaceComponent },
  // { path: "rtl", component: RtlComponent }
];
