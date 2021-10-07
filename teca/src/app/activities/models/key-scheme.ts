import { KeyResponse } from "../interfaces/key-response";
export class KeyScheme {
    constructor(
        public keySchemeId:string='',
        public schemeTitle:string='',
        public responses: KeyResponse[]=[]
    ){}
    

    
}
