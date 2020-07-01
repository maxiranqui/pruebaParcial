import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {

  
  constructor(private fb: FormBuilder ) { }

  personaForm = this.fb.group({
    nombre: [''],
    apellido: [''],
    edad: [''],
    direccion: ['']

  })

  ngOnInit(): void {
  }
submit(){
  this.personaForm.value;
}
}
