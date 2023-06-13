import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TravelGuide } from '../models/travelguide';

@Injectable({
  providedIn: 'root'
})
export class TravelGuideService {
  findAll() {
    throw new Error("Method not implemented.");
  }
  save(user: TravelGuide) {
    throw new Error("Method not implemented.");
  }
  delete(id: number) {
    throw new Error("Method not implemented.");
  }
  private BASE_URL = "http://localhost:8080/travelguide";

  
  }


