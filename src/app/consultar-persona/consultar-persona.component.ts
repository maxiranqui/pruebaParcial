import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/clase/Persona';
import { ComponentConsultarService } from 'src/app/servicio/consultar-persona.service';
@Component({
  selector: 'app-consultar-persona',
  templateUrl: './consultar-persona.component.html',
  styleUrls: ['./consultar-persona.component.css']
})
export class ConsultarPersonaComponent implements OnInit {


  displayedColumns: string[] = ['nombre', 'apellido', 'edad', 'direccion','editar'];
  dataSource: any[] = [];

  constructor(private router: Router, private componentConsultarService: ComponentConsultarService,private rutaA: ActivatedRoute) { }
  personaNueva: any;
  persona: Persona;
  
  ngOnInit() {
    debugger;
    this.getPersonas();
    //this.agregarFila();
  }
  getPersonas(){
    this.componentConsultarService.getPersona().subscribe((personas) => {
      debugger;
      this.dataSource = personas;
      this.agregarFila()
  
    });
  }

  agregarFila(){
    debugger;
    this.personaNueva = this.rutaA.snapshot.params;
    this.dataSource.push(this.personaNueva)

  }
  editar(element){
    debugger;
    this.router.navigate(['/crear-persona-component', element])
  }


}
