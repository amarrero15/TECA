import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTable} from '@angular/material/table';
@Component({
  selector: 'app-groups-table',
  templateUrl: './groups-table.component.html',
  styleUrls: ['./groups-table.component.scss'],
})
export class GroupsTableComponent implements OnInit {
  columns: string[] =['nombre', 'grado', 'email','rendimiento', 'editar'];
  studentsList=[
    {nombre:'Alfredo Marrero Víquez',grado:'Sétimo',email: 'amarrero@estudiantec.cr', rendimiento: '100'}
  , {nombre:'Bernardo Marrero Víquez',grado:'Sétimo',email: 'amarrero@estudiantec.cr', rendimiento: '100'}
  , {nombre:'Bernardo Marrero Víquez',grado:'Sétimo',email: 'amarrero@estudiantec.cr', rendimiento: '100'}
  , {nombre:'Bernardo Marrero Víquez',grado:'Sétimo',email: 'amarrero@estudiantec.cr', rendimiento: '100'}
  , {nombre:'Bernardo Marrero Víquez',grado:'Sétimo',email: 'amarrero@estudiantec.cr', rendimiento: '100'}
  , {nombre:'Bernardo Marrero Víquez',grado:'Sétimo',email: 'amarrero@estudiantec.cr', rendimiento: '100'}];
  @ViewChild(MatTable) tabla1: MatTable<any>;
  constructor() { }

  ngOnInit() {}
  selectLevel(event: any){
    
  }
  updateRow(cod: number){
    if (confirm("Realmente quiere actualizarlo?")) {
      this.studentsList.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }

}
