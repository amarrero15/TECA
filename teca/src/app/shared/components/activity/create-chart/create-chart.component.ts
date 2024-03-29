import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-chart',
  templateUrl: './create-chart.component.html',
  styleUrls: ['./create-chart.component.scss'],
})
export class CreateChartComponent implements OnInit {
  @Output() charSelectedEvent = new EventEmitter();
  Title: string = "Crear ficha";
  Indications: string = "Elige el tipo de ficha según indicaciones de la actividad.";
  @Input() activityOptions: any;
  ChartOptions: any = [
    {
      "src": "assets/svg/charts/analogy.svg",
      "name": "Esquema de sangrado",
      "value": "sangrado",
    },
    {
      "src": "assets/svg/charts/comparative.svg",
      "name": "Cuadros comparativos",
      "value": "comparativo",
    },
    {
      "src": "assets/svg/charts/tree.svg",
      "name": "Esquema de árbol",
      "value": "arbol",
    },
    {
      "src": "assets/svg/charts/bleeding.svg",
      "name": "Esquema de sangrado",
      "value": "sangrado",
    },
    {
      "src": "assets/svg/charts/mnemonics.svg",
      "name": "Mnemotécnias",
      "value": "mnemotecnia",
    },
    {
      "src": "assets/svg/charts/synonyms.svg",
      "name": "Sinónimos y antónimos",
      "value": "sinonimos",
    },
  ];
  constructor(private route: Router) { }

  ngOnInit() {
    console.log(this.activityOptions);
  }

  openActivity(event: any){
    //this.route.navigate(['/actividades']);
    console.log(event.target.value);
    this.charSelectedEvent.emit(event.target.value);
  }

}
