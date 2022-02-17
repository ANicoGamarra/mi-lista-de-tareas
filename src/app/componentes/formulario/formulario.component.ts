import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() envioTarea = new EventEmitter<string>();
  @Output() tareasOrdenadas = new EventEmitter<string>();

  nuevaTarea:string="";
  
  constructor() { }

  ngOnInit(): void {       
    
  }

  agregarTarea(nuevaTarea:string, event:Event){
    event.preventDefault();
    
    this.nuevaTarea = nuevaTarea;

    let miFormulario = document.getElementById("formulario");
    (<HTMLFormElement>miFormulario).reset();

    this.enviarTarea(nuevaTarea);
    (<HTMLFormElement>miFormulario).focus();
  }

  enviarTarea(tarea:string){
    this.envioTarea.emit(tarea)
  }

  ordenarTareas(event:Event){
    event.preventDefault();
    this.tareasOrdenadas.emit()  
  }
  
   
}
