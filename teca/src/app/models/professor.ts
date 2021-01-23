export class Professor {
    constructor(
        public _id: string= '',
        public nombre: string= '',
        public sexo: string = '',
        public fechaNacimiento: Date = null,
        public especialidad: string= '',
        public email: string = '',
        public editable: boolean= false
    ) {}
}
