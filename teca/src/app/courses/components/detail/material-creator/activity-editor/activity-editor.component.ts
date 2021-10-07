import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { Chapter } from 'src/app/courses/models/chapter';
import { CourseService } from '../../../../services/course.service';
import { Activity } from '../../../../models/activity';
import { TechniqueI } from '../../../../interfaces/technique-i';
import { Router } from '@angular/router';
import { Course } from 'src/app/courses/models/course';
@Component({
  selector: 'app-activity-editor',
  templateUrl: './activity-editor.component.html',
  styleUrls: ['./activity-editor.component.scss'],
})
export class ActivityEditorComponent implements OnInit {
  courseData: any;
  chapterSelected = new Chapter();
  courseInformation= new Course();
  newActivity = new Activity();
  techniques:any[];
  public activityOptions = [
    {
      "src": "assets/svg/charts/analogy.svg",
      "name": "Analogías",
      "value": "analogía",
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
    {
      "src": "assets/svg/charts/keys.svg",
      "name": "Esquema de llaves",
      "value": "llaves",
    },
    {
      "src": "assets/svg/charts/mental.svg",
      "name": "Mapa mental",
      "value": "mental",
    },
    {
      "src": "assets/svg/charts/conceptual.svg",
      "name": "Mapa conceptual",
      "value": "conceptual",
    },
  ];
  constructor(
    private navParams: NavParams
  , private popoverController: PopoverController
  , private courseService: CourseService
  , private route: Router) { }

ngOnInit() {
  this.courseData=this.navParams.get('data');
  
}

searchThemes(event: any){
  this.courseService.getChapter(event.target.value).then(res=>{
    this.chapterSelected = res.data() as Chapter
  })
}

selectTechnique(technique: any){
  const data :TechniqueI ={
    src:technique.src,
    name:technique.name,
    value:technique.value
  };
  this.newActivity.technique.push(data);
  this.techniques.push(data);
  console.log(this.techniques);
}

create(){
  this.newActivity.technique=this.techniques;
  console.log(this.techniques);
  this.courseService.createActivity(this.newActivity).then(res=>{
    console.log('Funcionó');
    this.popoverController.dismiss();
    this.route.navigate(['/cursos/actividades']);
  }).catch(err=>console.log(err));
}

cancel(){
  this.popoverController.dismiss();
}

}
