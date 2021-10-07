import { TechniqueI } from '../interfaces/technique-i';
export class Activity {
    constructor(
        public activityId:string='',
        public chapterId:string='',
        public themeId:string='',
        public technique:TechniqueI[]=[],
        public indications:string='',
        public professorId:string='',
        public courseId:string=''
    ){}
}
