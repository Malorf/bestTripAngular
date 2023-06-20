import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/home",
    title: "Home",
    rtlTitle: "لوحة القيادة",
    icon: "icon-atom",
    class: ""
  },
  {
    path: "/experience",
    title: "Experience",
    rtlTitle: "لوحة القيادة",
    icon: "icon-atom",
    class: ""
  },
  {
    path: "/review",
    title: "review",
    rtlTitle: "إخطارات",
    icon: "icon-bell-55",
    class: ""
  },

  {
    path: "/transports",
    title: "Transport",
    rtlTitle: "قائمة الجدول",
    icon: "icon-puzzle-10",
    class: ""
  },
  {
    path: "/travelguide",
    title: "TravelGuide",
    rtlTitle: "ار تي ال",
    icon: "icon-world",
    class: ""
  },
  {
    path: "/place",
    title: "Place",
    rtlTitle: "ار تي ال",
    icon: "icon-world",
    class: ""
  },
  {
    path: "/newsletter",
    title: "Newsletter",
    rtlTitle: "ار تي ال",
    icon: "icon-world",
    class: ""

  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
