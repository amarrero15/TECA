import { ActivityI } from '../interfaces/activity-i';
export class Theme {
    constructor(
        public themeId:string='',
        public activities: ActivityI=null,
        public chapterId:string='',
        public title:string='',
        public content:string='',
    ){}
}
