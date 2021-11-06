import { ConceptualResponse } from '../interfaces/conceptual-response';
export class ConceptualScheme{
    constructor(
        public conceptualSchemeId: string | '',
        public schemeTitle: string | '',
        public responses: ConceptualResponse[] = []
    ){}
}