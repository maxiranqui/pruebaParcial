import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Persona} from 'src/app/clase/Persona';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {

  persona: Persona;
  registro: any;
  constructor(private fb: FormBuilder,private rutaActiva: ActivatedRoute, private router: Router ) { }

  personaForm = this.fb.group({
    nombre: [''],
    apellido: [''],
    edad: [''],
    direccion: ['']

  })

  ngOnInit(): void {

    debugger;

    this.registro = this.rutaActiva.snapshot.params;

    if(Object.keys(this.registro).length){
      this.persona = this.registro;

  }
  this.initForm(this.persona);
  }
  initForm(editarPersona: Persona){
    this.personaForm = this.fb.group({
      nombre: [editarPersona ? editarPersona.nombre: ''],
      apellido: [editarPersona ? editarPersona.apellido: ''],
      edad: [editarPersona ? editarPersona.edad: ''],
      direccion: [editarPersona ? editarPersona.direccion: '']
  
    })
  
  }



submit(){
  this.personaForm.value;
  this.persona = this.personaForm.value;

    this.router.navigate(['/consultar-persona-component', this.persona]);
}
}
