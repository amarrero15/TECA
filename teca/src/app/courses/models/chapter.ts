import { ThemeI } from '../interfaces/theme-i';
export class Chapter {
    constructor(
        public chapterId:string='',
        public title:string='',
        public color:string='',
        public themes: ThemeI[]=[]
    ){}
}
