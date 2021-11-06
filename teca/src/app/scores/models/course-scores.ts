import { CourseActivities } from '../interfaces/course-activities';
export class CourseScores {
    constructor(
        public courseId: string='',
        public studentId: string='',
        public professortId: string='',
        public name: string='',
        public average: string='',
        public activities: CourseActivities[]=[]
    ){}
}
