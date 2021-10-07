import { SynonymsResponse } from "../interfaces/synonyms-response";
export class Synonym {
    constructor(
        public analogyId:string='',
        public responses:SynonymsResponse[]=[]
    ){}
}
