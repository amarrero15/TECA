import { CoursesInfo } from '../interfaces/courses-info';
export class Campaign {
    constructor(
        public studentId: string='',
        public courses: CoursesInfo[]=[]
    ){}
}
