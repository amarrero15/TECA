export class Student {
    constructor(
        public _id: string= '',
        public nombre: string= '',
        public sexo: string = '',
        public fechaNacimiento: Date = null,
        public grado: string= '',
        public institucion: string= '',
        public email: string='',
        public profesor: string = '',
        public editable: boolean= false
    ) {}
}
