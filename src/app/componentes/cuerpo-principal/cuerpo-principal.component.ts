import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuerpo-principal',
  templateUrl: './cuerpo-principal.component.html',
  styleUrls: ['./cuerpo-principal.component.css']
})
export class CuerpoPrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  tareaRecibida:string = '';
  listaTareas:any = [];
  borrar:boolean = false;
  flag:boolean = true;
  

  recibirTarea($event: string){
    
      if ($event === ''){
        /* console.log("esta vacio") */
        return;
      }
      this.borrar = false;
      this.tareaRecibida = $event;
    /* console.log(this.tareaRecibida) */
      const tarea ={
        id: Date.now(),
        descripcion: this.tareaRecibida, 
        estado: false
      }
           
      this.listaTareas.push(tarea);

      /* console.log(this.listaTareas); */

    }
  
    eliminarTarea(indice:number){
      this.borrar = false;
      console.log(indice)
      this.listaTareas = this.listaTareas.filter(function(listaTareas:any){
          return listaTareas.id !== indice
      })

    }

    tareaRealizada(indice:number){
      this.borrar = false;
      let indiceTarea = this.listaTareas.findIndex( (element: any) => element.id === indice);
      /* console.log(indiceTarea); */
      this.listaTareas[indiceTarea].estado = true;
      this.flag = false;
    }
    modificarEstilo(){}

    actualizarTarea(indice:number){
      this.borrar = false;
      let indiceTarea = this.listaTareas.findIndex( (element: any) => element.id === indice);
      /* console.log(indiceTarea); */
      this.listaTareas[indiceTarea].estado = false;
      this.flag = true;
      /* console.log(this.listaTareas) */
    }

    borrarLista(){
      this.borrar = true;   
      /* console.log(this.borrar) */       
    }

    borrarTodo(){
      this.listaTareas = [];
    }

    borrarTareasRealizadas(){
      this.listaTareas = this.listaTareas.filter(function(listaTareas:any){
        return listaTareas.estado !== true
    })
      this.borrar = false;
    }
    borrarTareasPendientes(){
      this.listaTareas = this.listaTareas.filter(function(listaTareas:any){
        return listaTareas.estado !== false
    })
      this.borrar = false;
    }
    cancelar(){
      this.borrar = false;
    }
    ordenarTareas(){
      this.borrar = false;
      
      /* console.log(this.prueba) */

      
    this.listaTareas.sort((a: { estado: number; }, b: { estado: number; }) => a.estado - b.estado)



    }
      
    
}

