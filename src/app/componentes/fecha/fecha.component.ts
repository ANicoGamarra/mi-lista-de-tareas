import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.css']
})
export class FechaComponent implements OnInit {

  FechaDia:String = "";
  FechaMes:String = "";
  FechaAnio:String = "";
  DiaDeLaSemana:String = "";

 
  constructor() { }

  ngOnInit(): void {
    this.configurarFecha()     
      
  }

  configurarFecha(){
    moment.locale("es");
    const fecha = new Date();
    this.FechaDia = moment(fecha).format('D');
    this.FechaMes = moment(fecha).format('MMMM');
    this.FechaAnio = moment(fecha).format('yyyy');
    this.DiaDeLaSemana = moment(fecha).format('dddd')
  } 

}
