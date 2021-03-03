export class Student {
    constructor(
        public _id: string= '',
        public name: string= '',
        public gender: string = '',
        public date: Date = null,
        public level: string= '',
        public highschool: string= '',
        public email: string='',
        public professor: string = '',
        public editable: boolean= false
    ) {}
}
