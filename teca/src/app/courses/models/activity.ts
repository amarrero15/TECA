import { TechniqueI } from '../interfaces/technique-i';
export class Activity {
    constructor(
        public activityId:string='',
        public themeId:string='',
        public technique:TechniqueI[]=[],
        public indications:string='',
    ){}
}
