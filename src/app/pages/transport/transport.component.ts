import { Component, OnInit } from "@angular/core";
import { Transport } from "src/app/models/transport";
import { TransportService } from "src/app/services/transport.service";

@Component({
  selector: "app-transport",
  templateUrl: "transport.component.html"
})
export class TransportsComponent implements OnInit {
  transports!:any[];
  transport:Transport=new Transport();
  router: any;
;
constructor(private transportService:TransportService){}

  ngOnInit():void {
    this.findAllTransport();
  }

  findAllTransport(){
    this.transportService.findAll().subscribe(data =>{this.transports = data});
  }
  saveTransport(){
    this.transportService.save(this.transport).subscribe(
      () => {
        // MAJ la liste des transports
        this.findAllTransport();
        // Vider le formulaire
        this.transport = new Transport();
      }
    )
  }
  
  deleteTransport(id:number){
    this.transportService.delete(id).subscribe(
      () => {
        this.findAllTransport();
      }
    )
  }
  editTransport(transport:Transport){
     // localStorage : créer un attribut (nom = editTransportId) dans le stockage local du navigateur
     // et lui affecter une valeur ==> editTransportId = transport.idTransport
     // Etape 1 : MAJ la varaible editTransportId
     localStorage.removeItem("TransportId");
     // Etape 2 : Sélectionner une ligne de la liste des transports : 
     localStorage.setItem("TransportId",transport.idTransport.toString());
     this.router.navigate(['/Transport',transport.idTransport]); // localhost:8080/editTransport/8 ==> id = 8
  }
}
