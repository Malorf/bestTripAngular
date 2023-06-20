import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { ExperienceComponent } from "../../pages/experience/experience.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { ReviewComponent } from "../../pages/review/review.component";
import { UserComponent } from "../../pages/user/user.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { TravelGuideComponent } from "../../pages/travelguide/travelguide.component";


import { NewsletterComponent } from "../../pages/newsletter/newsletter/newsletter.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { TransportsComponent } from "../../pages/transport/transport.component";
import { PlaceComponent } from "../../pages/place/place.component";
import { LoginComponent } from "../../pages/login/login.component";
import { AccountComponent } from "../../pages/account/account.component";
import { AdminComponent } from "../../pages/admin/admin.component";
import { EditProfileComponent } from "../../pages/editProfile/editProfile.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
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
    LoginComponent,
    AccountComponent,
    TransportsComponent,
    IconsComponent,
    TypographyComponent,
    MapComponent,
    PlaceComponent,
    AdminComponent,
    EditProfileComponent,
    
  ]
})
export class AdminLayoutModule {}
