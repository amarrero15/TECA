import { Component,Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Chapter } from 'src/app/courses/models/chapter';
import { ThemesService } from '../../services/themes.service';

@Component({
  selector: 'app-themes-view',
  templateUrl: './themes-view.component.html',
  styleUrls: ['./themes-view.component.scss'],
})
export class ThemesViewComponent implements OnInit {
  @Output() themeViewEvent = new EventEmitter();
  @Input() chapterData:any;
  chapterThemes: any=[]
  constructor(private themesService: ThemesService) { 
  }

  ngOnInit() {
    this.getThemes();
  }
  getThemes(){
    this.themesService.getMyThemes(this.chapterData).then(res=>{
      this.chapterThemes = res;
      console.log(res);
    }).catch();
  }

  goTo(event: any){
    this.themeViewEvent.emit(event);
  }

}
